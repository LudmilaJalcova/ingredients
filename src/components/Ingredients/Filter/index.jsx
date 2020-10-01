import React, { memo, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Card from '../../Card'
import useHttp from '../../../hooks/http'
import ErrorModal from '../../ErrorModal'
import Loading from '../../Loading'

const Wrapper = styled(Card)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
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
	const { onLoadIngredients } = props
	const [enteredFilter, setEnteredFilter] = useState('')
	const inputRef = useRef()

	const { isLoading, data, error, sendRequest, clear } = useHttp()

	useEffect(() => {
		const timer = setTimeout(() => {
			if (enteredFilter === inputRef.current.value) {
				const query =
					enteredFilter.length === 0
						? ''
						: `?orderBy="title"&equalTo="${enteredFilter}"`
				sendRequest(
					'https://react-ingredients-example.firebaseio.com/ingredients.json' +
						query,
					'GET'
				)
			}
		}, 500)
		return () => {
			clearTimeout(timer)
		}
	}, [enteredFilter, inputRef, sendRequest])

	useEffect(() => {
		if (!isLoading && !error && data) {
			const loadedIngredients = []
			for (const key in data) {
				// console.log(data[key].title)
				loadedIngredients.push({
					id: key,
					title: data[key].title,
					amount: data[key].amount,
				})
			}
			onLoadIngredients(loadedIngredients)
		}
	}, [data, isLoading, error, onLoadIngredients])

	return isLoading ? (
		<Loading />
	) : (
		<Wrapper>
			{error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
			<Text>Filter by Title</Text>
			<Input
				ref={inputRef}
				type="text"
				value={enteredFilter}
				onChange={event => {
					setEnteredFilter(event.target.value)
				}}
			/>
		</Wrapper>
	)
}
export default memo(Filter)
