import { createRoot } from 'react-dom/client';
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

// react v18

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<App />
	</Provider>
)

// react-redux不用自己检测状态的改变
// store.subscribe(() => {
// 	root.render(<App />)
// })