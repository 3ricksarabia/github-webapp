/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import Container from "../components/Container";

const Home = () => (
	<Container>
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
