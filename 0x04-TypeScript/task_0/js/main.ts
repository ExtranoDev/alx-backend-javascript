interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Kotila";
  lastName: "Membi";
  age: 21;
  location: "Ilara";
};
const student2: Student =  = {
  firstName: "Jude";
  lastName: "Nwaneri";
  age: 30;
  location: "Igbaraoke";
};

const studentsList: Student[] = [student1, student2];
