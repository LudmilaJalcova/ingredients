import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	background-color: red;
	border-radius: 5px;
	border: transparent;
	padding: 8px 15px;
	color: white;
	font-weight: bold;
`

export default function ButtonForm(props) {
	return (
		<Button type={props.type} disabled={props.disabled}>
			Add Ingredient
		</Button>
	)
}
