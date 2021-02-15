import { shape } from "prop-types";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";

const Repo = ({ repo }) => (
	<Container>
		<Navigation back="/repos" home="/" />
		<Card
			bio={repo.description}
			stats={{
				star: repo.stargazers_count,
				fork: repo.forks_count,
				issues: repo.open_issues_count,
			}}
			name={repo.name}
			username={repo.owner.login}
			url={repo.html_url}
		/>
	</Container>
);

export async function getServerSideProps({ query }) {
	const RESPONSE = await fetch(`https://api.github.com/repos/${query.owner}/${query.name}`, {
		headers: {
			authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
		},
	});
	const REPO = await RESPONSE.json();

	return {
		props: {
			repo: REPO,
		},
	};
}

Repo.propTypes = {
	/** The repo data. */
	repo: shape(),
};

Repo.defaultProps = {
	repo: null,
};

export default Repo;
