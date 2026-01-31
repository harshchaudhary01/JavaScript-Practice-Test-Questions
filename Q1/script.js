const container = document.getElementById('container');

const ul = document.createElement('ul');
container.appendChild(ul);
const students = [
    { name: 'Harsh', marks: 85 },
    { name: 'Arman', marks: 92 },
    { name: 'Rohan', marks: 78 },
    { name: 'Harsh', marks: 85 },
    { name: 'Arman', marks: 92 },
    { name: 'Rohan', marks: 78 }
];
students.forEach((student, index) => {
    const li = document.createElement('li');
    li.textContent = `${student.name} - ${student.marks}`;
    li.style.backgroundColor = index % 2 === 0 ? 'salmon' : 'lightblue';
    ul.appendChild(li);
});

