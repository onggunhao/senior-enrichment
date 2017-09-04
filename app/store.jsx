import { 
  createStore, 
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// Import sub-reducers
import students from './reducers/students'
import campuses from './reducers/campuses'
import activeCampus from './reducers/activeCampus'
import showAddStudent from './reducers/showAddStudent'

const reducer = combineReducers({
  students,
  campuses,
  activeCampus,
  showAddStudent
});

 const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, 
    createLogger()
  )
);

export default store;

// Export action creators
export * from './reducers/students'
export * from './reducers/campuses'
export * from './reducers/activeCampus'
export * from './reducers/showAddStudent'
