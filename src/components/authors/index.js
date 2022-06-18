import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const Authors = () => {
	const { allContentfulAuthor } = useStaticQuery(graphql`
		query {
			allContentfulAuthor {
				nodes {
					fullName
				}
			}
		}
	`);

	return (
		<div>
			<h1>Authors</h1>
			<ul>
				{allContentfulAuthor.nodes.map((node) => (
					<li key={node.fullName}>{node.fullName}</li>
				))}
			</ul>
		</div>
	);
};
