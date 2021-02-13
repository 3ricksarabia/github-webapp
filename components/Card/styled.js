import styled from "styled-components";

const Wrapper = styled.div`
	color: #000;
	background: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	align-items: center;
	width: 100%;
	height: 100vh;
`;

const Thumbnail = styled.section`
	background: #000;
	height: 20%;
	width: 100%;
	text-align: center;
	img {
		width: 12rem;
		border-radius: 50%;
		margin-top: 2rem;
		@media (max-width: 768px) {
			margin-top: 3rem;
		}
	}
`;

const Caption = styled.section`
	color: #000;
	width: 30rem;
	height: ${(props) => props.height};
	padding: ${(props) => props.padding};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;

	ul {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-bottom: 4rem;

		li {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			height: 4rem;
		}
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Anchor = styled.a`
	background: #fff;
	border: 2px solid #000;
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-weight: bold;
	text-decoration: none;
`;

export { Wrapper, Thumbnail, Caption, Anchor };
