/**
 * 改文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from './constant'

// function createIncrementAction(data) {
// 	return {type: 'increment', data}
// }
// function createDecrementAction(data) {
// 	return {type: 'decrement', data}
// }

// 同步action，就是指action的值为对象
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

// 异步action，就是指action的值为函数，异步actin中一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction = (data, delay) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(createIncrementAction(data))			
		}, delay)
	}
}