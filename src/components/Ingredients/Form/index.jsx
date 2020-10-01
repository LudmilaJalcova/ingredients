import React from 'react'
import { useForm } from 'react-hook-form'
import InputForm from './InputForm'
import ButtonForm from './ButtonForm'
import Card from '../../Card'

const Form = props => {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = data =>
		props.onAddIngredient({ title: data.name, amount: data.amount })
	return (
		<Card>
			<form onSubmit={handleSubmit(onSubmit)}>
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
			</form>
		</Card>
	)
}

export default Form
