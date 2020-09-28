import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import InputForm from './InputForm'
import ButtonForm from './ButtonForm'

const Wrapper = styled.form`
	box-shadow: 0px 1px 7px 4px rgb(128 128 128 / 45%);
	padding: 20px;
	margin-top: 20px;
	border-radius: 3px;
`

export default function Form(props) {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = data =>
		props.onAddIngredient({ title: data.name, amount: data.amount })
	return (
		<Wrapper onSubmit={handleSubmit(onSubmit)}>
			<InputForm
				error={errors && errors.name && 'Value is required!'}
				type="string"
				placeholder="type name"
				name="name"
				label="Name"
				defaultValue=""
				register={register({
					required: true,
				})}
			/>

			<InputForm
				error={errors && errors.amount && errors.amount.message}
				type="number"
				name="amount"
				register={register({
					required: 'Value is required!',
				})}
				label="Amount"
				defaultValue=""
				placeholder="type amount"
			/>

			<ButtonForm type="submit" disabled={false} />
		</Wrapper>
	)
}
