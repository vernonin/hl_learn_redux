import React, { Component } from 'react'
// 引入store，用于获取store中保存的状态
import store from '../../redux/store'
// 引入actionCreate，专门用于创建action对象
import { createIncrementAction , createDecrementAction } from '../../redux/count_action'

export default class Count extends Component {

	increment = () => {
		const { value } = this.selectNumber
		store.dispatch(createIncrementAction(parseInt(value)))
	}
	decrement = () => {
		const { value } = this.selectNumber
		store.dispatch(createDecrementAction(parseInt(value)))
	}
	incrementIfOdd = () => {
		const { value } = this.selectNumber
		const count = store.getState()
		if(count % 2 !== 0) {
			store.dispatch(createIncrementAction(parseInt(value)))
		}
	}
	incrementAsync = () => {
		const { value } = this.selectNumber
		setTimeout(() => {
			store.dispatch(createIncrementAction(parseInt(value)))
		}, 500)
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{store.getState()}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>
			</div>
		)
	}
}
