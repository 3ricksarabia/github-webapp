import { arrayOf, shape, string, func, oneOf } from "prop-types";
import Avatar from "../Avatar";
import { Input, Wrapper, List } from "./styled";

const Form = ({ results, onKeyUp, title, type }) => (
	<Wrapper>
		{title && <h1>{title}</h1>}
		<Input
			id="search"
			placeholder={`Search ${type}...`}
			radius={results.length}
			onKeyUp={(event) => onKeyUp(event)}
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

Form.propTypes = {
	/** The search results. */
	results: arrayOf(shape()),
	/** Gey key up object. */
	onKeyUp: func,
	/** The search title. */
	title: string,
	/** The search type. */
	type: oneOf(["repo", "user"]),
};

Form.defaultProps = {
	results: [],
	onKeyUp: null,
	title: "",
	type: "",
};

export default Form;
