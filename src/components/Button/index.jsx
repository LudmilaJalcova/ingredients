import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: #ff2058;
	border-radius: 3px;
	border: 2px solid #ff2058;
	padding: 8px 15px;
	color: white;
	font-weight: bold;
`

const Button = props => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
