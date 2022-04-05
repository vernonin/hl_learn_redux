/**
 * 该问用于汇总所有的reducer为一个总的reducer
 */
// 引入combineReducers 用于汇总多个reducer
import { combineReducers } from "redux"

import count from './count'
import persons from './person'


export default combineReducers({
	count,
	persons
})