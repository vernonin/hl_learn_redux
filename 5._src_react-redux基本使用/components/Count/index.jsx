import React, { Component } from 'react'


export default class Count extends Component {

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
				<h1>当前求和为：{this.props.count}</h1>
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
