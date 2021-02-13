import { useState } from "react";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Container from "../containers/User";

const Repositories = () => {
	const [repositories, setRepositories] = useState();

	const searchUsers = (event) => {
		const REPOSITORY = event.target.value || "";

		if (REPOSITORY) {
			fetch(`https://api.github.com/search/repositories?q=${REPOSITORY}&per_page=5`, {
				headers: {
					authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
				},
			})
				.then((response) => response.json())
				.then((data) => setRepositories(data.items))
				.catch(() => setRepositories([]));
		} else {
			setRepositories([]);
		}
	};

	return (
		<Container>
			<Navigation back="/" />
			<Search
				results={repositories}
				handleSearch={searchUsers}
				title="GitHub Repositories"
				type="repository"
			/>
		</Container>
	);
};

export default Repositories;
