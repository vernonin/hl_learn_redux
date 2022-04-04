import { createRoot } from 'react-dom/client';
import App from './App'
import store from './redux/store'

// react v18

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)

store.subscribe(() => {
	root.render(<App />)
})