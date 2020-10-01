import React, { useEffect, useCallback, useReducer, useMemo } from 'react'
import styled from 'styled-components'
import Form from './Form'
import List from './List'
import Filter from './Filter'
import Loading from '../Loading'
import ErrorModal from '../ErrorModal'
import useHttp from '../../hooks/http'

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
`
const ingredientReducer = (currentIngredients, action) => {
	switch (action.type) {
		case 'SET':
			return action.ingredients
		case 'ADD':
			return [...currentIngredients, action.ingredient]
		case 'DELETE':
			return currentIngredients.filter(ing => ing.id !== action.id)
		default:
			throw new Error('Should not get there!')
	}
}

export default function Ingredients() {
	const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
	const {
		isLoading,
		data,
		error,
		sendRequest,
		reqExtra,
		reqIdentifier,
		clear,
	} = useHttp()

	//hook na uchovanie stavu nasho pola
	// const [userIngredients, setUserIngredients] = useState([])
	// const [isLoading, setIsLoading] = useState(false)
	// const [error, setError] = useState()

	useEffect(() => {
		if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
			dispatch({ type: 'DELETE', id: reqExtra })
		} else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
			dispatch({ type: 'ADD', ingredient: { id: data.name, ...reqExtra } })
		}
	}, [data, reqExtra, reqIdentifier, isLoading, error])

	const filteredIngredientsHandler = useCallback(filteredIngredients => {
		dispatch({ type: 'SET', ingredients: filteredIngredients })
	}, [])

	//pridavanie polozky
	const addIngredientHandler = useCallback(
		ingredient => {
			sendRequest(
				'https://react-ingredients-example.firebaseio.com/ingredients.json',
				'POST',
				JSON.stringify(ingredient),
				ingredient,
				'ADD_INGREDIENT'
			)
		},
		[sendRequest]
	)

	//odoberanie polozky
	const removedIngredientHandler = useCallback(
		ingredientId => {
			sendRequest(
				`https://react-ingredients-example.firebaseio.com/ingredients/${ingredientId}.json`,
				'DELETE',
				null,
				ingredientId,
				'REMOVE_INGREDIENT'
			)
		},
		[sendRequest]
	)

	console.log('a', userIngredients)

	const ingredientsList = useMemo(
		() => (
			<List
				onRemovedItem={removedIngredientHandler}
				ingredients={userIngredients}
			/>
		),
		[userIngredients, removedIngredientHandler]
	)

	return (
		<Wrapper>
			{error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
			<Form onAddIngredient={addIngredientHandler} />
			<Filter onLoadIngredients={filteredIngredientsHandler} />
			{isLoading ? <Loading /> : ingredientsList}
		</Wrapper>
	)
}

//zglobalizovat vsetko co sa opakuje, title, description, wrapper(nazvat ako Card)
