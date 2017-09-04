// ACTION TYPES
const SHOW_ADD_STUDENT = 'SHOW_ADD_STUDENT'

// ACTION CREATORS
export function showAddStudent () {
  const action = { type: SHOW_ADD_STUDENT }
  return action
}

export default function reducer (state=false, action) {
  switch (action.type) {

    case SHOW_ADD_STUDENT:
      return true

    default:
      return false
  }
}