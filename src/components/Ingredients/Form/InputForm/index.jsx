import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin-bottom: 15px;
`
const Input = styled.input`
	display: block;
	width: 100%;
	padding: 15px 10px;
	border-color: transparent;
	border-bottom: 2px solid grey;
	text-transform: capitalize;
	font-weight: bold;
`
const Label = styled.label`
	font-weight: bold;
`
const Error = styled.span`
	color: red;
	font-weight: bold;
`

export default function InputForm(props) {
	return (
		<Wrapper>
			<Label htmlFor={props.name}>{props.label}</Label>
			<Input
				type={props.type}
				id={props.name}
				name={props.name}
				defaultValue={props.defaultValue}
				ref={props.register}
				placeholder={props.placeholder}
			/>
			{props.error && <Error>{props.error}</Error>}
		</Wrapper>
	)
}
