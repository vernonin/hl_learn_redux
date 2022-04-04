import { createRoot } from 'react-dom/client';
import App from './App'

// react v18

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)

createRoot(document.getElementById('root')).render(<App />)