import PropTypes from "prop-types";
import Avatar from "../Avatar";
import { Input, Wrapper, List } from "./styled";

const Search = ({ results, handleSearch }) => (
	<Wrapper>
		<h1>Search Users</h1>
		<Input
			placeholder="username"
			onInput={(event) => handleSearch(event)}
			radius={results.length}
		/>
		{results.length > 0 && (
			<List>
				{results.map((item) => (
					<li key={item.id}>
						<Avatar image={item.avatar_url} username={item.login} />
					</li>
				))}
			</List>
		)}
	</Wrapper>
);

Search.propTypes = {
	results: PropTypes.arrayOf(PropTypes.shape()),
};

Search.defaultProps = {
	results: [],
};

export default Search;
