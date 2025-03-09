import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'


function App() {

	return (
		<>
			<Nav></Nav>
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	)
}

export default App
