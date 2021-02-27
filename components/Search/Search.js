import { useState, useEffect } from "react";
import { string, oneOf } from "prop-types";
import Form from "../Form";
import Navigation from "../Navigation";
import Container from "../Container";

const Search = ({ title, type, url }) => {
	const [results, setResults] = useState([]);
	const [storage, setStorage] = useState({});
	const [block, setBlock] = useState(false);
	const [interval, setInterval] = useState(0);

	useEffect(() => {
		if (Object.keys(storage).length >= 30) {
			setStorage({});
		}
	}, [storage]);

	const searchRepos = (input, currentInterval) => {
		const STORAGE = storage;

		if (input && !block) {
			fetch(`${url}?q=${input}&per_page=5`, {
				headers: {
					authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.items.length === 0) {
						setBlock(true);
					}

					STORAGE[input] = data.items;
					setResults(data.items);
					setStorage(STORAGE);
				})
				.catch(() => setResults([]))
				.finally(() => window.clearInterval(currentInterval));
		} else {
			setResults([]);
		}
	};

	const onKeyUp = () => {
		const INPUT = document.querySelector("#search").value;
		window.clearInterval(interval);

		if (INPUT in storage) {
			setResults(storage[INPUT]);
			setBlock(false);
		} else {
			const INTERVAL = window.setInterval(() => searchRepos(INPUT, INTERVAL), 1000);
			setInterval(INTERVAL);
		}
	};

	return (
		<Container>
			<Navigation back="/" />
			<Form results={results} onKeyUp={onKeyUp} title={title} type={type} />
		</Container>
	);
};

Search.propTypes = {
	/** The search title. */
	title: string.isRequired,
	/** The search type. */
	type: oneOf(["repo", "user"]).isRequired,
	/** The url to fetch. */
	url: string.isRequired,
};

export default Search;
