const students = [
    {
        id: "123456",
        name: "Ahmed Khan",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        batch: "Morning",
        contact: "03001234567"
    },
    {
        id: "123457",
        name: "Fatima Ahmed",
        photo: "https://randomuser.me/api/portraits/women/1.jpg",
        batch: "Evening",
        contact: "03001234568"
    },
    {
        id: "123458",
        name: "Usman Ali",
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        batch: "Morning",
        contact: "03001234569"
    },
    {
        id: "123459",
        name: "Ayesha Raza",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        batch: "Evening",
        contact: "03001234570"
    },
    {
        id: "123460",
        name: "Bilal Hussain",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        batch: "Morning",
        contact: "03001234571"
    },
    {
        id: "123461",
        name: "Hina Malik",
        photo: "https://randomuser.me/api/portraits/women/3.jpg",
        batch: "Evening",
        contact: "03001234572"
    },
    {
        id: "123462",
        name: "Kamran Shah",
        photo: "https://randomuser.me/api/portraits/men/4.jpg",
        batch: "Morning",
        contact: "03001234573"
    },
    {
        id: "123463",
        name: "Sana Akhtar",
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
        batch: "Evening",
        contact: "03001234574"
    },
    {
        id: "123464",
        name: "Tariq Mahmood",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        batch: "Morning",
        contact: "03001234575"
    },
    {
        id: "123465",
        name: "Zainab Qureshi",
        photo: "https://randomuser.me/api/portraits/women/5.jpg",
        batch: "Evening",
        contact: "03001234576"
    },
    {
        id: "123466",
        name: "Faisal Iqbal",
        photo: "https://randomuser.me/api/portraits/men/6.jpg",
        batch: "Morning",
        contact: "03001234577"
    },
    {
        id: "123467",
        name: "Nadia Sheikh",
        photo: "https://randomuser.me/api/portraits/women/6.jpg",
        batch: "Evening",
        contact: "03001234578"
    },
    {
        id: "123468",
        name: "Imran Baig",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
        batch: "Morning",
        contact: "03001234579"
    },
    {
        id: "123469",
        name: "Sadia Noor",
        photo: "https://randomuser.me/api/portraits/women/7.jpg",
        batch: "Evening",
        contact: "03001234580"
    },
    {
        id: "123470",
        name: "Asadullah Khan",
        photo: "https://randomuser.me/api/portraits/men/8.jpg",
        batch: "Morning",
        contact: "03001234581"
    },
    {
        id: "123471",
        name: "Mehwish Ansari",
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
        batch: "Evening",
        contact: "03001234582"
    },
    {
        id: "123472",
        name: "Junaid Akram",
        photo: "https://randomuser.me/api/portraits/men/9.jpg",
        batch: "Morning",
        contact: "03001234583"
    },
    {
        id: "123473",
        name: "Rabia Sultan",
        photo: "https://randomuser.me/api/portraits/women/9.jpg",
        batch: "Evening",
        contact: "03001234584"
    },
    {
        id: "123474",
        name: "Saad Farooq",
        photo: "https://randomuser.me/api/portraits/men/10.jpg",
        batch: "Morning",
        contact: "03001234585"
    },
    {
        id: "123475",
        name: "Amina Khalid",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
        batch: "Evening",
        contact: "03001234586"
    },
    {
        id: "123476",
        name: "Haris Malik",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        batch: "Morning",
        contact: "03001234587"
    },
    {
        id: "123477",
        name: "Sara Tanveer",
        photo: "https://randomuser.me/api/portraits/women/11.jpg",
        batch: "Evening",
        contact: "03001234588"
    },
    {
        id: "123478",
        name: "Abdul Rehman",
        photo: "https://randomuser.me/api/portraits/men/12.jpg",
        batch: "Morning",
        contact: "03001234589"
    },
    {
        id: "123479",
        name: "Zara Hussain",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        batch: "Evening",
        contact: "03001234590"
    },
    {
        id: "123480",
        name: "Noman Ahmed",
        photo: "https://randomuser.me/api/portraits/men/13.jpg",
        batch: "Morning",
        contact: "03001234591"
    },
    {
        id: "123481",
        name: "Fariha Javed",
        photo: "https://randomuser.me/api/portraits/women/13.jpg",
        batch: "Evening",
        contact: "03001234592"
    },
    {
        id: "123482",
        name: "Shahzad Khan",
        photo: "https://randomuser.me/api/portraits/men/14.jpg",
        batch: "Morning",
        contact: "03001234593"
    },
    {
        id: "123483",
        name: "Aisha Farooq",
        photo: "https://randomuser.me/api/portraits/women/14.jpg",
        batch: "Evening",
        contact: "03001234594"
    },
    {
        id: "123484",
        name: "Waqas Ali",
        photo: "https://randomuser.me/api/portraits/men/15.jpg",
        batch: "Morning",
        contact: "03001234595"
    },
    {
        id: "123485",
        name: "Saima Akram",
        photo: "https://randomuser.me/api/portraits/women/15.jpg",
        batch: "Evening",
        contact: "03001234596"
    },
    {
        id: "123486",
        name: "Farhan Siddiqui",
        photo: "https://randomuser.me/api/portraits/men/16.jpg",
        batch: "Morning",
        contact: "03001234597"
    },
    {
        id: "123487",
        name: "Noreen Abbas",
        photo: "https://randomuser.me/api/portraits/women/16.jpg",
        batch: "Evening",
        contact: "03001234598"
    },
    {
        id: "123488",
        name: "Zubair Ahmed",
        photo: "https://randomuser.me/api/portraits/men/17.jpg",
        batch: "Morning",
        contact: "03001234599"
    },
    {
        id: "123489",
        name: "Khadija Malik",
        photo: "https://randomuser.me/api/portraits/women/17.jpg",
        batch: "Evening",
        contact: "03001234600"
    },
    {
        id: "123490",
        name: "Adnan Sheikh",
        photo: "https://randomuser.me/api/portraits/men/18.jpg",
        batch: "Morning",
        contact: "03001234601"
    },
    {
        id: "123491",
        name: "Sadia Kamal",
        photo: "https://randomuser.me/api/portraits/women/18.jpg",
        batch: "Evening",
        contact: "03001234602"
    },
    {
        id: "123492",
        name: "Rizwan Haider",
        photo: "https://randomuser.me/api/portraits/men/19.jpg",
        batch: "Morning",
        contact: "03001234603"
    },
    {
        id: "123493",
        name: "Hira Aslam",
        photo: "https://randomuser.me/api/portraits/women/19.jpg",
        batch: "Evening",
        contact: "03001234604"
    },
    {
        id: "123494",
        name: "Salman Butt",
        photo: "https://randomuser.me/api/portraits/men/20.jpg",
        batch: "Morning",
        contact: "03001234605"
    },
    {
        id: "123495",
        name: "Mariam Khan",
        photo: "https://randomuser.me/api/portraits/women/20.jpg",
        batch: "Evening",
        contact: "03001234606"
    }
];

const trTemplateHTML = (data) => {
    return `  
        <td>
            <img src="${data.photo}" width="50" alt="${data.name}" />
        </td>
        <td>${data.id}</td>
        <td>${data.name.trim()}</td>
        <td>${data.contact}</td>
        <td>${data.batch}</td>`
}

window.students = students;
window.trTemplateHTML = trTemplateHTML;