import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Title from '../Title'
import Card from '../Card'
import { AuthContext } from '../../context/auth-context'

const Wrapper = styled(Card)`
	max-width: 600px;
	width: 100%;
	margin: 20px auto;
	text-align: center;
`

const StyledTitle = styled(Title)`
	color: #ff2058;
`

const Description = styled.p`
	padding-bottom: 1rem;
`

const StyledButton = styled(Button)`
	margin-top: 20px;
`

const Auth = () => {
	const authContext = useContext(AuthContext)
	const loginHandler = () => {
		authContext.login()
	}
	return (
		<Wrapper>
			<StyledTitle>You are not authenticated!</StyledTitle>
			<Description>Please log in to continue.</Description>
			<StyledButton onClick={loginHandler}>Log in</StyledButton>
		</Wrapper>
	)
}

export default Auth
