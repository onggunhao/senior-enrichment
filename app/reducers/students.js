import axios from 'axios'

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';

// ACTION CREATORS
export function getStudents (students) {
  const action = { type: GET_STUDENTS, students}
  return action
}

export function getStudent (student) {
  const action = { type: GET_STUDENT, student }
  return action
}

// THUNK CREATORS
export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action);
      })
  }
}

export function postStudent (student, history) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(student => {
        dispatch(getStudent(student))
        history.push('/students')
      })
  }
}

// REDUCER
export default function reducer (state=[], action) {
  switch (action.type) {
    
    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT:
      return [...state, action.student];
      
    default:
      return state;
  }
}