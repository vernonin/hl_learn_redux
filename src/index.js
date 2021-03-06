import { createRoot } from 'react-dom/client';
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

// react v18
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	// 此处需要用Provider包裹APP，目的是人App所有的后代容器组件都能接收到store
	<Provider store={store}>
		<App />
	</Provider>
)