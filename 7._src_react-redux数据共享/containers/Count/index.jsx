import React, { Component } from 'react'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入createAction
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/actions/count'

// 定义UI组件
class Count extends Component {

	increment = () => {
		const { value } = this.selectNumber
		this.props.jia(parseInt(value))
	}
	decrement = () => {
		const { value } = this.selectNumber
		this.props.jian(parseInt(value))
	}
	incrementIfOdd = () => {
		const { value } = this.selectNumber
		if(this.props.count % 2 !== 0) {
			this.props.jia(parseInt(value))
		}
	}
	incrementAsync = () => {
		const { value } = this.selectNumber
		this.props.jiaAsync(parseInt(value), 1000)
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{this.props.count}，总人数为：{this.props.renshu}</h1>
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state => ({count: state.count, renshu: state.person.length}),

	// mapDispatchToProps的一般写法
	// dispatch => ({
	// 	jia: data => dispatch(createIncrementAction(data)),
	// 	jian: data => dispatch(createDecrementAction(data)),
	// 	jiaAsync: (data, delay) => dispatch(createIncrementAsyncAction(data, delay))
	// })

	// mapDispatchToProps的简写 ---> react-redux会自己调用dispatch函数
	{
		jia: createIncrementAction,
		jian: createDecrementAction,
		jiaAsync: createIncrementAsyncAction,
	}
)(Count)