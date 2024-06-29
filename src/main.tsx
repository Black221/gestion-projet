import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app/App.tsx'
import './index.css'
import Login from './auth/Login.tsx'
import Register from './auth/Register.tsx'
import { MainProvider } from './providers/MainProvider.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'
import { ModalProvider } from './providers/ModalProvider.tsx'

// import Home from "./home/Page.tsx";
import AuthGuard from './guards/AuthGuard.tsx'
import IsAuth from './guards/isAuth';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MainProvider>
			<AuthProvider>
				<ModalProvider>
					<BrowserRouter>
						<Routes>

							<Route path="/" element={<Login />} />

							<Route path='/'  element={<AuthGuard />}  >
								<Route path="/app/*" element={<App />} />
							</Route>

							<Route  element={<IsAuth />}>
								<Route path='/connexion' element={<Login />} />
							</Route>

							<Route path='/inscription' element={<Register />} />
							
						</Routes>
					</BrowserRouter>
				</ModalProvider>
			</AuthProvider>
		</MainProvider>
	</React.StrictMode>,
)
