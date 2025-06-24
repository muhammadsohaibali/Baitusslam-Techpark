async function init() {
    document.getElementById('batchFilter').addEventListener('change', async (e) => {
        await renderData(e.target.value);
    });

    await renderData('all');
}

async function renderData(filterBatch) {
    document.getElementById('tbody').innerHTML = '';
    let filteredStudents = students;

    console.log(filterBatch)

    if (filterBatch !== 'all')
        filteredStudents = students.filter((student) => student.batch === filterBatch);

    filteredStudents.forEach((studentData) => {
        const element = document.createElement('tr');
        element.innerHTML = trTemplateHTML(studentData);
        document.getElementById('tbody').appendChild(element);
    });
}

init()