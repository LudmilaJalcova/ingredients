import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'reset-css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
		height: 100%;
		font-family: Arial, Helvetica, sans-serif;
	}

	* {
		box-sizing: border-box;
		outline: 0
	}

	a {
    color: inherit;
    display: inline-block;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

	::placeholder {
		color: red;
	}

	input:focus {
		outline: 0;
	}
`

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
