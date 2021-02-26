import { useState, useEffect } from "react";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Container from "../components/Container";

const Repositories = () => {
	const [repositories, setRepositories] = useState([]);
	const [storage, setStorage] = useState({});
	const [block, setBlock] = useState(false);
	const [interval, setInterval] = useState(0);

	useEffect(() => {
		if (Object.keys(storage).length >= 30) {
			setStorage({});
		}
	}, [storage]);

	const searchRepos = (repo, currentInterval) => {
		const STORAGE = storage;

		if (repo && !block) {
			fetch(`https://api.github.com/search/repositories?q=${repo}&per_page=5`, {
				headers: {
					authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.items.length === 0) {
						setBlock(true);
					}

					STORAGE[repo] = data.items;
					setRepositories(data.items);
					setStorage(STORAGE);
				})
				.catch(() => setRepositories([]))
				.finally(() => window.clearInterval(currentInterval));
		} else {
			setRepositories([]);
		}
	};

	const onKeyUp = () => {
		const INPUT = document.querySelector("#search").value;
		window.clearInterval(interval);

		if (INPUT in storage) {
			setRepositories(storage[INPUT]);
			setBlock(false);
		} else {
			const INTERVAL = window.setInterval(() => searchRepos(INPUT, INTERVAL), 1000);
			setInterval(INTERVAL);
		}
	};

	return (
		<Container>
			<Navigation back="/" />
			<Search
				results={repositories}
				onKeyUp={onKeyUp}
				title="GitHub Repositories"
				type="repo"
			/>
		</Container>
	);
};

export default Repositories;
