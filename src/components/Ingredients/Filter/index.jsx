import React, { memo, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding: 20px;
	margin-top: 30px;
	box-shadow: 0px 1px 7px 4px rgb(128 128 128 / 45%);
	border-radius: 3px;
`
const Text = styled.div`
	font-weight: bold;
`
const Input = styled.input`
	height: 35px;
	border-radius: 5px;
	text-transform: capitalize;
	font-weight: bold;
	border: 1px solid red;
`

const Filter = props => {
	// const [enteredFilter, setEnteredFilter] = useState('')

	return (
		<Wrapper>
			<Text>Filter by Title</Text>
			<Input ref={props.inputRef} onChange={props.onFilterItem} />
		</Wrapper>
	)
}
export default memo(Filter)
