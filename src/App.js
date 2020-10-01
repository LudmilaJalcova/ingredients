import React, { useContext } from 'react'
import Ingredients from './components/Ingredients'
import Auth from './components/Auth'
import { AuthContext } from './context/auth-context'

function App() {
	const authContext = useContext(AuthContext)

	if (authContext.isAuth) {
		return <Ingredients />
	} else {
		return <Auth />
	}
}

export default App
