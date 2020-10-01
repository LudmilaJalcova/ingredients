import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	box-shadow: 0px 1px 7px 4px rgb(128 128 128 / 45%);
	padding: 20px;
	margin-top: 30px;
	border-radius: 3px;
`

const Card = props => {
	return <Wrapper {...props}>{props.children}</Wrapper>
}

export default Card
