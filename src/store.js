import {createStore,combineReducers} from 'redux';
import inputReducer from './reducers/inputReducer';
import mainReducer from './reducers/mainReducer';
import finishTaskReducer from './reducers/finishTaskReducer';


const store = createStore(combineReducers({
    input:inputReducer,
    main:mainReducer,
    finishTask:finishTaskReducer
}))

export default store;