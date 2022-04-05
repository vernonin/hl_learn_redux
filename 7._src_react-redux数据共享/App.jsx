import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {
	render() {
		return (
			// 给容器组件传递store
			// <Count store={store} />
			<div>
				<Count />
				<hr/>
				<Person/>
			</div>
		)
	}
}
