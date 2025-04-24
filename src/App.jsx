import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import { Toaster } from 'react-hot-toast';


function App() {

	return (
		<>
			<Nav></Nav>
			<div>
				<Toaster
					position="top-center"
					reverseOrder={false}
					toastOptions={{
						style: {
							backgroundColor: "#f59e0b",
							color: "#000000",
							borderRadius: "5px",
							boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
							fontWeight: "500",
							padding: "0.75rem 1.25rem",
							fontSize: "0.95rem",
						},
						success: {
							backgroundColor: "#f59e0b",
							color: "#000000",
						},
						error: {
							backgroundColor: "#f59e0b",
							color: "#000000",
						},
						loading: {
							backgroundColor: "#fef3c7",
							color: "#92400e",
						},
					}}
				/>
			</div>

			<Outlet></Outlet>
			<Footer></Footer>
		</>
	)
}

export default App
