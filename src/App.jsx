import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import { Toaster } from 'react-hot-toast';


function App() {

	return (
		<>
			<Nav></Nav>
			<div><Toaster
				position="top-center"
				reverseOrder={false}
			/></div>
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	)
}

export default App
