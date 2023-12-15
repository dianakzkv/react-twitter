import "./index.css";

import Grid from "../grid";

export default function Component({ username, date, text }) {
	return (
		<Grid>
			<div className="post-content">
				<span className="post-content__username">@{username}</span>
				<span className="post-content__date">{date}</span>
			</div>

			<p className="post-content__text">{text}</p>
		</Grid>
	);
}
