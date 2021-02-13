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
						<li>
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

export default Card;
