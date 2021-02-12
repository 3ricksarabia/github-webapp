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
	height: 30%;
	width: 100%;
	text-align: center;
	img {
		width: 12rem;
		border-radius: 50%;
		margin-top: 7rem;
		@media (max-width: 768px) {
			margin-top: 10rem;
		}
	}
`;

const Caption = styled.section`
	color: #000;
	padding: 0.5rem;
	width: 30rem;
	height: 65%;
	padding: 8rem 2rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	@media (max-width: 768px) {
		width: 100%;
		height: 60%;
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
