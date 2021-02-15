import { arrayOf, shape, string, func, oneOf } from "prop-types";
import Avatar from "../Avatar";
import { Input, Wrapper, List } from "./styled";

const Search = ({ results, handleSearch, title, type }) => (
	<Wrapper>
		{title && <h1>{title}</h1>}
		<Input
			placeholder={`Search ${type}...`}
			onInput={(event) => handleSearch(event)}
			radius={results.length}
		/>
		{results.length > 0 && (
			<List>
				{results.map((item) => (
					<li key={item.id}>
						<Avatar
							image={item.avatar_url || item?.owner?.avatar_url}
							username={item.login}
							name={item.name}
							type={type}
							repo={item.name}
							owner={item?.owner?.login}
							id={item.id}
						/>
					</li>
				))}
			</List>
		)}
	</Wrapper>
);

Search.propTypes = {
	/** The search results. */
	results: arrayOf(shape()),
	/** Set values to search. */
	handleSearch: func,
	/** The search title. */
	title: string,
	/** The search type. */
	type: oneOf(["repo", "user"]),
};

Search.defaultProps = {
	results: [],
	handleSearch: null,
	title: "",
	type: "",
};

export default Search;
