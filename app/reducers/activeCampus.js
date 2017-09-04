// ACTION TYPES
const CHANGE_CAMPUS = 'CHANGE_CAMPUS'

// ACTION CREATORS
export function changeCampus (campus) {
  const action = { type: CHANGE_CAMPUS, campus }
  return action
}

export default function reducer (state={ name: 'All' }, action) {
  switch (action.type) {

    case CHANGE_CAMPUS:
      return action.campus

    default:
      return { name: 'All' }
  }
}