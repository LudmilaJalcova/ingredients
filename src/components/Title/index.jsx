import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
	padding-bottom: 1rem;
	text-align: center;
	font-size: 22px;
	font-weight: bold;
`

const Title = props => {
	return <StyledTitle {...props}>{props.children}</StyledTitle>
}

export default Title
