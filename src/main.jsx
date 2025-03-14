import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App'
import Home from './components/Home/Home'
import BlogPosts from './components/BlogPosts/BlogPosts'
import PostDetails from './components/PostDetails/PostDetails'


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path='' element={<App></App>}>
				<Route index element={<Home></Home>}></Route>
			</Route>
			<Route path='/posts/' element={<App></App>}>
				<Route index element={<BlogPosts></BlogPosts>}></Route>
			</Route>
			<Route path='/posts/:postId' element={<App></App>}>
				<Route index element={<PostDetails></PostDetails>}></Route>
			</Route>
		</Routes>
	</BrowserRouter>
)
