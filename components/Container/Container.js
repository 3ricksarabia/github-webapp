import styled from "styled-components";

const Container = styled.div`
	background: #000;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;

	main {
		display: flex;
		flex-direction: column;

		a {
			border: 2px solid #fff;
			padding: 1rem;
			width: 18rem;
			text-align: center;
			margin: 1rem 0;
		}
	}
`;

export default Container;
