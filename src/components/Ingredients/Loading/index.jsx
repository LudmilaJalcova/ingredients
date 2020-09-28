import React, { Children } from 'react'
import styled, { keyframes, css } from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	height: 200px;
	text-align: center;
`
const Title = styled.div`
	color: black;
	font-weight: bold;
	font-size: 40px;
	padding: 20px;
`
const blinkingDots = keyframes`
	0% {  
		opacity: 1;
	}
	100% {
		opacity: 0;
	}	
`

const DotsWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const Dot = styled.div`
	height: 20px;
	width: 20px;
	background-color: black;
	border-radius: 50px;
	margin: 10px;
	animation-name: ${blinkingDots};
	animation-duration: 1s;
	animation-iteration-count: infinite;

	&:nth-child(2) {
		animation-delay: 250ms;
	}

	&:nth-child(3) {
		animation-delay: 500ms;
	}
`

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = numbers.filter(
// 	number => Number(number) < 4 && Number(number) > 2
// )

// console.log(result)

export default function Loading(props) {
	return (
		<Wrapper>
			<Title>Loading</Title>
			<DotsWrapper>
				<Dot />
				<Dot />
				<Dot />
			</DotsWrapper>
		</Wrapper>
	)
}

// @keyframes ball-beat {
//   50% {
//     opacity: 0.2;
//     -webkit-transform: scale(0.75);
//             transform: scale(0.75); }
//   100% {
//     opacity: 1;
//     -webkit-transform: scale(1);
//             transform: scale(1); } }

// .ball-beat > div {
//   background-color: #fff;
//   width: 15px;
//   height: 15px;
//   border-radius: 100%;
//   margin: 2px;
//   -webkit-animation-fill-mode: both;
//           animation-fill-mode: both;
//   display: inline-block;
//   -webkit-animation: ball-beat 0.7s 0s infinite linear;
//           animation: ball-beat 0.7s 0s infinite linear; }
//   .ball-beat > div:nth-child(2n-1) {
//     -webkit-animation-delay: -0.35s !important;
//             animation-delay: -0.35s !important; }
