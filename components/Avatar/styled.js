import styled from "styled-components";

const Wrapper = styled.a`
	color: #000;
	display: flex;
	flex-direction: row;
	border-radius: 6px;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	width: 20rem;
	span {
		margin-left: 1rem;
	}
`;

const Placeholder = styled.div`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	background: #eee;
`;

const Image = styled.img`
	width: 3rem;
	border-radius: 50%;
`;

export { Wrapper, Placeholder, Image };
