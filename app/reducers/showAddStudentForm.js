// ACTION TYPES
const SHOW_ADD_STUDENT_FORM = 'SHOW_ADD_STUDENT_FORM'

// ACTION CREATORS
export function toggleAddStudentForm() {
  const action = { type: SHOW_ADD_STUDENT_FORM }
  return action
}

export default function reducer (state=false, action) {
  switch (action.type) {

    case SHOW_ADD_STUDENT_FORM:
      return !state

    default:
      return false
  }
}