import React, { memo } from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 50;
	background-color: rgba(0, 0, 0, 0.75);
	display: flex;
	align-items: center;
	justify-content: center;
`

const Modal = styled.div`
	background-color: #000;
	border-radius: 7px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`
const Title = styled.h2`
	color: #fff;
	background-color: #ff2058;
	padding: 1rem;
	border-radius: 7px 7px 0 0;
	text-align: center;
`
const Message = styled.p`
	padding: 1rem;
	color: #ff2058;
	text-align: center;
`

const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0 0.5rem 0.5rem;
`

const ErrorModal = memo(props => {
	return (
		<Wrapper>
			<Modal onClick={props.onClose}>
				<Title>An ERROR occured!</Title>
				<Message>{props.children}</Message>
				<Actions>
					<Button onClick={props.onClose} type="button">
						OK
					</Button>
				</Actions>
			</Modal>
		</Wrapper>
	)
})
export default ErrorModal

//D.U. nastylovat Modal(nevidno text)
