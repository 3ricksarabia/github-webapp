import styled from "styled-components";

const Wrapper = styled.ul`
	color: #fff;
	background: #000;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 10%;
	list-style: none;
`;

const Anchor = styled.a`
	border: 2px solid #000;
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-weight: bold;
	text-decoration: none;
	text-transform: uppercase;
`;

export { Wrapper, Anchor };
