import React from 'react'
import Button from '../../../Button'

export default function ButtonForm(props) {
	return (
		<Button type={props.type} disabled={props.disabled}>
			Add Ingredient
		</Button>
	)
}
