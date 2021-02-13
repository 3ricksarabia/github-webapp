/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import Container from "../containers/Home";

const Home = () => (
	<Container>
		<h1>GitHub API</h1>
		<Link href="/users">
			<a>Search Users</a>
		</Link>
		<Link href="/repos">
			<a>Search Repositories</a>
		</Link>
	</Container>
);

export default Home;
