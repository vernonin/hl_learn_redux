// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入createAction
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'

// mapStateToProps函数的返回值作为状态传递给了UI组件
// mapStateToProps函数返回对象中的
// 					key就作为传递UI组件props的key，
// 					value就作为传递给UI组件props的value
// mapStateToProps用于传递状态
function mapStateToProps(state) {
	return {count: state}
}

// mapDispatchToProps用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
	return {
		jia: data => dispatch(createIncrementAction(data)),
		jian: data => dispatch(createDecrementAction(data)),
		jiaAsync: (data, delay) => dispatch(createIncrementAsyncAction(data, delay))
	}
}


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)