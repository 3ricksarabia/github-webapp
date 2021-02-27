import Search from "../components/Search";

const Repositories = () => (
	<Search
		title="GitHub Repositories"
		type="repo"
		url="https://api.github.com/search/repositories"
	/>
);

export default Repositories;
