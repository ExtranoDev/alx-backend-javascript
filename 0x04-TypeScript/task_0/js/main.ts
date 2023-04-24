interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Kotila",
  lastName: "Membi",
  age: 21,
  location: "Ilara"
};

const student2: Student = {
  firstName: "Jude",
  lastName: "Nwaneri",
  age: 30,
  location: "Igbaraoke"
};

const studentsList: Student[] = [student1, student2];
const stud_prop = ['firstName', 'lastName', 'age', 'location']

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const head_row = document.createElement('tr');
const head_det = document.createElement('th');

for (const i in stud_prop) {
  head_det.textContent = i;
  head_row.appendChild(head_det);
}

tbody.appendChild(head_row);

studentsList.forEach((obj) => {
  const row = document.createElement('th');
  const detail = document.createElement('td');
  Object.values(obj).forEach((prop) => {
    detail.textContent = prop;
    row.appendChild(detail);
  });
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
