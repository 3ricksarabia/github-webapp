import Link from "next/link";
import { string } from "prop-types";
import { Anchor, Wrapper } from "./styled";

const Navigation = ({ back, home }) => (
	<Wrapper>
		{back && (
			<li>
				<Link href={back}>
					<Anchor>&laquo; back</Anchor>
				</Link>
			</li>
		)}
		{home && (
			<li>
				<Link href={home}>
					<Anchor>home</Anchor>
				</Link>
			</li>
		)}
	</Wrapper>
);

Navigation.propTypes = {
	/** The back link's destination. */
	back: string,
	/** The home link's destination. */
	home: string,
};

Navigation.defaultProps = {
	back: "/",
	home: "/",
};

export default Navigation;
