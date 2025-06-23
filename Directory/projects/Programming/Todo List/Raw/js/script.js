var listItems = [
    {
        id: 1,
        title: "list item A"
    },
    {
        id: 2,
        title: "list item B"
    },
    {
        id: 3,
        title: "list item C"
    },
    {
        id: 4,
        title: "list item D"
    }
]

const DOMElements = {
    input: document.getElementById('id-input'),
    addItem: document.getElementById('id-add-item'),
    listBox: document.getElementById('id-list-body'),
    notifyDiv: document.getElementById('id-notify'),
}

class TodoList {
    static listItems() {
        DOMElements.listBox.innerHTML = listItems.map(item => itemTemplate(item)).join('')
    }

    static renderupdateItem(id) {
        const item = listItems.find(item => item.id === id)
        DOMElements.input.value = item.title
        DOMElements.addItem.textContent = 'Update'
        DOMElements.addItem.onclick = () => TodoList.addItem(id)
    }

    static addItem(id) {
        let [inpVal] = [DOMElements.input.value]
        if (!inpVal.trim()) return notify("Title Can't be Empty")
        if (id) {
            listItems.forEach(item => item.id === id && (item.title = inpVal.trim()))
            DOMElements.addItem.textContent = 'Add Item'
            DOMElements.addItem.onclick = () => TodoList.addItem()
            notify('Todo Updated')
        } else {
            if (!(listItems.every(item => item.title !== inpVal.trim())))
                return notify('Todo Already Exists')
            listItems.push({
                id: listItems.length,
                title: inpVal.trim()
            })
            notify('Todo Added')
        }
        inpVal = ''
        TodoList.listItems()
    }

    static removeItem(id) {
        listItems = listItems.filter(item => item.id !== id)
        TodoList.listItems()
        notify('Removed Todo')
    }
}

function init() {
    TodoList.listItems();
}

init();

function notify(message, delay = 3) {
    let notify = DOMElements.notifyDiv
    notify.style.display = 'block'
    notify.textContent = message
    setTimeout(() => {
        notify.textContent = '';
        notify.style.display = 'none';
    }, delay * 1000)
}

function itemTemplate({ id, title }) {
    return `
        <div class="item" data-id="${id}">
        <div class="part item-title">
            ${title}
        </div>
        <div class="part action-btns">
            <button onclick="TodoList.renderupdateItem(${id})" class="update-item">
                Edit
            </button>
            <button onclick="TodoList.removeItem(${id})" class="dlt-item">
                Delete
            </button>
        </div>
        </div>
    `;
}
