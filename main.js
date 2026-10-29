import { getStudentsAPI, addStudentsAPI } from './api.js';

//Display students in console
function displayStudents(label) {
  const students = getStudentsAPI();
  console.log(label, students);
}

displayStudents('Initial DB State:');

//Add a new student
const newStudentData = {
  firstName: 'Omedetou',
  lastName: 'Gozaimasu',
  email: 'omedetou.gozaimasu@example.com',
};
//Add the new student to the mock database
const addedStudent = addStudentsAPI(newStudentData);
console.log('Return Saved Object:', addedStudent);

//Display the updated list of students
displayStudents('Updated DB State:');
