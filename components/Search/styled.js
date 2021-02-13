import styled from "styled-components";

const Wrapper = styled.div`
	background: #000;
	height: 90%;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 6rem;
	h1 {
		color: #fff;
		text-transform: capitalize;
	}
`;

const Input = styled.input`
	width: 30rem;
	height: 50px;
	border-radius: ${(props) => (props.radius > 0 ? "2rem 2rem 0 0" : "2rem")};
	border: 0;
	font-size: 1.2rem;
	padding-left: 1.2rem;
	&:focus {
		outline: none;
	}
	@media (max-width: 768px) {
		width: 20rem;
	}
`;

const List = styled.ul`
	background: #fff;
	max-height: 24rem;
	width: 30rem;
	border-radius: 0 0 2rem 2rem;
	padding: 0 0 5rem 0;
	overflow: hidden;
	margin: 0;
	li {
		list-style: none;
		scroll-snap-align: center;
		margin: 0.5rem 0;
		padding: 0.4rem 1rem;
		&:hover {
			background: #eee;
		}
	}
	@media (max-width: 768px) {
		width: 20rem;
		padding: 0;
	}
`;

export { Input, Wrapper, List };
