import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section``

const Title = styled.h2`
	font-weight: bold;
	font-size: 22px;
	border-bottom: 3px solid grey;
	padding-top: 50px;
	padding-bottom: 20px;
`
const List = styled.ul`
	margin-top: 30px;
`

const Item = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	height: 40px;
	padding: 20px;
	box-shadow: 0px 1px 7px 4px rgb(128 128 128 / 45%);
	border-radius: 3px;
`
const Name = styled.span`
	text-transform: capitalize;
	font-weight: bold;
`

const Amount = styled.span`
	font-weight: bold;
`

export default function IngredientList(props) {
	return (
		<Wrapper>
			<Title>Loaded ingredients</Title>
			<List>
				{props.userIngredients.map(item => (
					<Item onClick={props.onRemovedItem.bind(this, item.id)} key={item.id}>
						<Name>{item.title}</Name>
						<Amount>{item.amount}x</Amount>
					</Item>
				))}
			</List>
		</Wrapper>
	)
}

// d.u.stylovat podla obrazka plus skusit zmazat item bez bind, vytvorit filter
