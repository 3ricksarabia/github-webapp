/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import Container from "../components/Container";
import Logo from "../components/Logo";

const Home = () => (
	<Container>
		<Logo alt="GitHub" src="/github.svg" />
		<h1>GitHub API</h1>
		<main>
			<Link href="/users">
				<a>Search Users</a>
			</Link>
			<Link href="/repos">
				<a>Search Repositories</a>
			</Link>
		</main>
	</Container>
);

export default Home;
