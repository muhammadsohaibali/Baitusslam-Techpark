// Improved JavaScript
class TodoApp {
    constructor() {
        this.DOMElements = {
            input: document.getElementById('id-input'),
            addItem: document.getElementById('id-add-item'),
            listBox: document.getElementById('id-list-body'),
            notifyDiv: document.getElementById('id-notify'),
            emptyState: document.getElementById('empty-state')
        };

        this.STORAGE_KEY = 'todoListItems';
        this.listItems = this.loadItems();

        this.init();
    }

    init() {
        // Use event delegation instead of inline handlers
        document.addEventListener('click', (e) => {
            if (e.target.matches('.update-item')) {
                const id = Number(e.target.closest('.item').dataset.id);
                this.renderupdateItem(id);
            } else if (e.target.matches('.dlt-item')) {
                const id = Number(e.target.closest('.item').dataset.id);
                this.removeItem(id);
            }
        });

        this.DOMElements.addItem.addEventListener('click', () => this.addItem());
        this.DOMElements.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addItem();
        });

        this.renderList();
        this.toggleEmptyState();
    }

    loadItems() {
        const storedItems = localStorage.getItem(this.STORAGE_KEY);
        return storedItems ? JSON.parse(storedItems) : [
            { id: 1, title: "list item A" },
            { id: 2, title: "list item B" },
            { id: 3, title: "list item C" },
            { id: 4, title: "list item D" }
        ];
    }

    saveItems() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.listItems));
    }

    generateId() {
        return Date.now();
    }

    renderList() {
        if (this.listItems.length === 0) {
            this.DOMElements.listBox.innerHTML = '';
            this.toggleEmptyState(true);
            return;
        }

        this.DOMElements.listBox.innerHTML = this.listItems
            .map(item => this.itemTemplate(item))
            .join('');

        this.toggleEmptyState();
    }

    toggleEmptyState(show) {
        const shouldShow = show ?? this.listItems.length === 0;
        this.DOMElements.emptyState.classList.toggle('visible', shouldShow);
    }

    renderupdateItem(id) {
        const item = this.listItems.find(item => item.id === id);
        if (!item) return;

        this.DOMElements.input.value = item.title;
        this.DOMElements.input.focus();
        this.DOMElements.addItem.textContent = 'Update';
        this.DOMElements.addItem.dataset.editingId = id;
    }

    addItem() {
        const inpVal = this.DOMElements.input.value.trim();
        const editingId = this.DOMElements.addItem.dataset.editingId;

        // Validation
        if (!inpVal) {
            this.notify("Title can't be empty");
            return;
        }

        if (inpVal.length > 100) {
            this.notify("Title is too long (max 100 chars)");
            return;
        }

        if (editingId) {
            // Update existing item
            const id = Number(editingId);
            const itemIndex = this.listItems.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                // Check for duplicate
                if (this.listItems.some((item, idx) =>
                    item.title === inpVal && idx !== itemIndex)) {
                    this.notify('Todo already exists');
                    return;
                }

                this.listItems[itemIndex].title = inpVal;
                this.notify('Todo updated');
            }
        } else {
            // Add new item
            if (this.listItems.some(item => item.title === inpVal)) {
                this.notify('Todo already exists');
                return;
            }

            this.listItems.push({
                id: this.generateId(),
                title: inpVal
            });
            this.notify('Todo added');
        }

        // Reset form
        this.DOMElements.input.value = '';
        this.DOMElements.addItem.textContent = 'Add Item';
        delete this.DOMElements.addItem.dataset.editingId;

        this.saveItems();
        this.renderList();
    }

    removeItem(id) {
        this.listItems = this.listItems.filter(item => item.id !== id);
        this.notify('Todo removed');
        this.saveItems();
        this.renderList();
    }

    notify(message, delay = 3000) {
        const notify = this.DOMElements.notifyDiv;
        notify.textContent = message;
        notify.style.display = 'block';

        setTimeout(() => {
            notify.textContent = '';
            notify.style.display = 'none';
        }, delay);
    }

    itemTemplate({ id, title }) {
        return `
            <div class="item" data-id="${id}" role="listitem">
                <div class="part item-title">
                    ${title}
                </div>
                <div class="part action-btns">
                    <button class="update-item" aria-label="Edit ${title}">
                        Edit
                    </button>
                    <button class="dlt-item" aria-label="Delete ${title}">
                        Delete
                    </button>
                </div>
            </div>
        `;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});