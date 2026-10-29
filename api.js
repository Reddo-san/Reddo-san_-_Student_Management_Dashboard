const mockStudentDb = [
  {
    id: 1778909877,
    firstName: 'Arigato',
    lastName: 'Gozaimasu',
    email: 'arigato.gozaimasu@example.com',
  },
  {
    id: 1778909878,
    firstName: 'Douzo',
    lastName: 'Yoroshiku',
    email: 'douzo.yoroshiku@example.com',
  },

];

function generateStudentId() {
  let id;

  do {
    id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  } while (mockStudentDb.some((student) => student.id === id));

  return id;
}

export function getStudentsAPI() {
  return mockStudentDb;
}

export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: generateStudentId(),
    firstName: newStudentData.firstName,
    lastName: newStudentData.lastName,
    email: newStudentData.email,
  };

  mockStudentDb.push(savedStudent);
  return savedStudent;
}
