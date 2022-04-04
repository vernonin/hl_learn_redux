## 1.求和案例 redux 精简版
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