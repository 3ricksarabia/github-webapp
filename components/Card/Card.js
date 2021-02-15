import { string, shape, number } from "prop-types";
import { Wrapper, Thumbnail, Caption, Anchor } from "./styled";

const Card = ({ bio, image, stats, username, name, url }) => (
	<Wrapper>
		{image && (
			<Thumbnail>
				<img alt={username} src={image} />
			</Thumbnail>
		)}
		<Caption
			height={image ? "70%" : "90%"}
			padding={image ? "8rem 1rem 0" : "2rem 2rem 0 2rem"}
		>
			<div>
				{name && <h3>{name}</h3>}
				{username && <span>@{username}</span>}
			</div>
			{bio && <p>{bio}</p>}
			{stats && (
				<ul>
					{Object.entries(stats).map((item) => (
						<li key={item[0]}>
							<span>{item[1]}</span>
							<b>{item[0]}</b>
						</li>
					))}
				</ul>
			)}
			<Anchor href={url} target="_blank">
				More
			</Anchor>
		</Caption>
	</Wrapper>
);

Card.propTypes = {
	/** The user bio. */
	bio: string,
	/** The user image source. */
	image: string,
	/** The repo stats. */
	stats: shape({
		star: number,
		fork: number,
		issues: number,
	}),
	/** The user identification. */
	username: string,
	/** The user or repo name. */
	name: string,
	/** The user / repo link's destination. */
	url: string,
};

Card.defaultProps = {
	bio: "",
	image: "",
	stats: null,
	username: "",
	name: "",
	url: "",
};

export default Card;
