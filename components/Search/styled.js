import styled from "styled-components";

const Wrapper = styled.div`
	background: #000;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	h1 {
		color: #fff;
	}
`;

const Input = styled.input`
	width: 30rem;
	height: 3rem;
	border-radius: 1rem;
	border: 0;
	padding-left: 1.3rem;
	font-size: 1.2rem;
	&:focus {
		outline: none;
	}
`;

const List = styled.ul`
	background: #fff;
	max-height: 24rem;
	width: 30rem;
	border-radius: 0 0 1rem 1rem;
	padding: 0 0 1rem 0;
	margin: 0;
	li {
		list-style: none;
		scroll-snap-align: center;
		margin: 0.5rem 0;
		padding: 0.5rem 1rem;
		&:hover {
			background: #eee;
		}
	}
`;

export { Input, Wrapper, List };
