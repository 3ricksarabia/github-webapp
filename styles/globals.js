import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	html,
	body {
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	h3 {
		margin: 0;
		font-size: 2rem;
	}

	p, span, a, b {
		font-size: 1.4rem;
	}

	* {
		box-sizing: border-box;
	}

	ul, li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
`;

export default GlobalStyles;
