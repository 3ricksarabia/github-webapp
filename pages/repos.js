import { useState, useEffect } from "react";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Container from "../components/Container";

const Repositories = () => {
	const [repositories, setRepositories] = useState([]);
	const [storage, setStorage] = useState({});
	const [block, setBlock] = useState(false);

	useEffect(() => {
		if (Object.keys(storage).length >= 30) {
			setStorage({});
		}
	}, [storage]);

	const searchRepos = (event) => {
		const REPOSITORY = event.target.value || "";
		const STORAGE = storage;

		if (REPOSITORY) {
			if (REPOSITORY in storage) {
				setRepositories(storage[REPOSITORY]);
				setBlock(false);
			} else if (!block) {
				fetch(`https://api.github.com/search/repositories?q=${REPOSITORY}&per_page=5`, {
					headers: {
						authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.items.length === 0) {
							setBlock(true);
						}

						STORAGE[REPOSITORY] = data.items;
						setRepositories(data.items);
						setStorage(STORAGE);
					})
					.catch(() => setRepositories([]));
			}
		} else {
			setRepositories([]);
		}
	};

	return (
		<Container>
			<Navigation back="/" />
			<Search
				results={repositories}
				handleSearch={searchRepos}
				title="GitHub Repositories"
				type="repo"
			/>
		</Container>
	);
};

export default Repositories;
