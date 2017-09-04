import axios from 'axios'

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT'

// ACTION CREATORS
export function getStudents (students) {
  const action = { type: GET_STUDENTS, students}
  return action
}

export function getStudent (student) {
  const action = { type: GET_STUDENT, student }
  return action
}

export function removeStudent (student) {
  const action = { type: REMOVE_STUDENT, student}
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
      })
  }
}

export function deleteStudent (student) {
  return function thunk (dispatch) {
    console.log("THUNK FUNCTION")
    console.log(student)
    return axios.delete(`/api/students/${student.id}'`)
      .then(res => {
        console.log(res)
        const action = removeStudent(student)
        dispatch(action)
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

    case REMOVE_STUDENT:
      return [...state].filter(student => student.id !== action.student.id)
      
    default:
      return state;
  }
}