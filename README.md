## 1.求和案例 redux 精简版
	新增文件
	1. 去除Count组件自身的状态

 	2. .src下建立：
		-src
			-redux
				-store.js
				-count_reducer.js

 	3. store.js:
		1). 引入redux中的createStore函数，创建一个store
		2). createStore调用时要传入一个为其服务的reducer
		3). 记得暴露store对象

 	4. count_reducer.js
		1). reducer的本质是一个函数，接收：preState, action,返回加工后的状态
		2). reducer有两个作用：初始化状态，加工状态
		3). reducer被第一次调用时，是store自动触发的，
								传递preState是undefined，
								传递action是{type: '@@REDUX/INIT_a.3.6.3'}

	5. 在index.js中检测store中状态的改变，一旦发生改变重新渲染<App/>
			备注：redux中自负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写


## 2.求和案例 redux 完整版
	新增文件
	 1. count_action.js 专门用于创建action对象
	 2. constant.js 放置由于编码疏忽写错action中的type


## 3.求和案例 redux 异步action版
	1. 明确：延迟的动作不想交给组件自身，想交给action
	2. 何时需要异步action：想要对状态进行操作，但是具体数据靠异步任务返回（非必须）
	3. 具体编码：
		1). npm install redux-thunk 并配置store中
		2). 创建action的函数不再返回一般对象，而是返回一个函数，该函数中写异步任务
		3). 异步任务有结果后，分发一个同步的action去真正操作数据
	4. 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action


## 4.求和案例 react-redux 基本使用
	1. 明确两个概念：
		1). UI组件：不能使用任何redux的api，只负责页面的展现，交互等
		2). 容器组件：负责和redux通信，将结果交给UI组件
	2. 如何创建一个容器组件-----考react-redux 的`connect`函数
			connect(mapStateToProps, mapDispatchToProps)(UI组件)
				-mapStateToProps：映射状态，返回值是一个对象
				-mapDispatchToProps：映射操作状态的方法，返回值是一个对象
	3. 备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
	4. 备注2：mapDispatchToProps也可以是一个对象 ---> react-redux 会自己dispatch


## 5.求和案例 react-redux 优化
	1. 容器组件和UI组件整合成一个文件
	2. 无需自己给容器组件传递store，给<App/>包裹<Provider store={store}>即可
	3. 使用react-redux后不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作
	4. mapDispatchToProps也可以简写成一个对象
	5. 一个组件要和redux“打交道”要经过那几步？
		1). 定义好UI组件 --- 不暴露
		2). 引入connect生成一个容器组件，并暴露，如下：
									connect(
										state => (key: value), // 映射状态
										{key: value}  // 映射方法
									)(UI组件)
		3). 在UI组件中通过this.props.xxx读取和操作状态


## 6.求和案例 react-redux 数据共享
	1. 定义一个Person组件，和Count组件通过redux共享数据
	2. 为Person组件编写：reducer、action,配置constant常量
	3. 重点：Person的reducer和Count的reducer要使用combineReducer进行合并，合并后是一个状态对象
	4. 交给store的是总的reducer，最后注意在组件中取出状态的时候，记得“取到位”

	
## 6.求和案例 react-redux 最终版
	1. 所有变量的名字要规范，尽量触发对象简写方式
	2. reducer文件夹中，编写index.js专门用于汇总并暴露所有reducer