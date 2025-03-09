import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home'


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path='' element={<App></App>}>
				<Route index element={<Home></Home>}></Route>
			</Route>
		</Routes>
	</BrowserRouter>
)
