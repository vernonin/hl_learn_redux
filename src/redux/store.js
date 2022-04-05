/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// 引入createStore， 专门用于创建redux最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux"
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'

const allReducers = combineReducers({
	count: countReducer,
	person: personReducer
})

export default createStore(allReducers, applyMiddleware(thunk))