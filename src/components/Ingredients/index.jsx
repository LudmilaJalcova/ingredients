import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Form from './Form'
import List from './List'
import Filter from './Filter'
import Loading from './Loading'

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
`

export default function Ingredients() {
	//hook na uchovanie stavu nasho pola
	const [userIngredients, setUserIngredients] = useState([])
	//hook na uchovanie toho, co piseme do inputu
	const [searchTerm, setSearchTerm] = useState('')
	//hook na ukladanie vyfiltrovanej polozky
	const [results, setResults] = useState([])

	useEffect(() => {
		fetch('https://react-ingredients-example.firebaseio.com/ingredients.json')
			.then(res => res.json())
			.then(responseData => {
				// console.log(responseData)
				const loadIngredients = []
				for (const key in responseData) {
					// console.log(responseData[key].title)
					loadIngredients.push({
						id: key,
						title: responseData[key].title,
						amount: responseData[key].amount,
					})
				}
				setUserIngredients(loadIngredients)
			})
	}, [])

	useEffect(() => {
		console.log('RENDERING INGREDIENTS', userIngredients)
	}, [userIngredients])

	//pridavanie polozky
	const onAddIngredient = ingredient => {
		fetch('https://react-ingredients-example.firebaseio.com/ingredients.json', {
			method: 'POST',
			body: JSON.stringify(ingredient),
			headers: { 'Content-Type': 'application/json' },
		})
			.then(res => {
				return res.json()
			})
			.then(responseData => {
				setUserIngredients(prevIngredients => {
					//do pola cez spred operator naplnime vsetko co pole uz obsahovalo, vygenerujeme mu id a pridame novovytvorenu polozku
					return [
						...prevIngredients,
						{
							id: responseData.name,
							...ingredient,
						},
					]
				})
			})
	}
	//odoberanie polozky
	const removedIngredientHandler = ingredientId => {
		console.log(ingredientId)
		setUserIngredients(prevIngredients =>
			//pomocou metody filter zmazeme polozky, ktore vyhovuju zadanej podmienke
			prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
		)
	}

	const inputRef = useRef(null)
	//useEffect sa spusti vzdy, ked nastane zmena v searchTerm alebo v userIngredients
	useEffect(() => {
		//pomocou metody filter hladame polozky, ktore maju rovnaky nazov ako prave zadany text v inpute
		const result = userIngredients.filter(ingredient =>
			ingredient.title.includes(searchTerm)
		)
		//pomocou setResults ostanu zobrazene len polozky vyhovujuce zadanemu slovu v inpute
		setResults(result)
	}, [searchTerm, userIngredients])

	return (
		<Wrapper>
			<Form onAddIngredient={onAddIngredient} />
			<Filter
				inputRef={inputRef}
				onFilterItem={() => {
					setSearchTerm(inputRef.current.value)
				}}
			/>
			<List
				onRemovedItem={removedIngredientHandler}
				userIngredients={results}
			/>
			<Loading />
		</Wrapper>
	)
}
