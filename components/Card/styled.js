import styled from "styled-components";

const Wrapper = styled.div`
	color: #000;
	background: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	align-items: center;
	width: 24rem;
	height: 34rem;
	box-shadow: 0px 15px 59px -20px rgb(0 0 0 / 35%);
`;

const Thumbnail = styled.section`
	background: #000;
	height: 30%;
	width: 100%;
	text-align: center;
	img {
		width: 10rem;
		border-radius: 50%;
		margin-top: 5rem;
	}
`;

const Caption = styled.section`
	color: #000;
	padding: 0.5rem;
	height: 70%;
	padding: 6rem 2rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;
`;

const Button = styled.button`
	background: #fff;
	border: 2px solid #000;
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-weight: bold;
`;

export { Wrapper, Thumbnail, Caption, Button };
