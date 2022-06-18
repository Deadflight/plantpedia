import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const Authors = () => {
	const authors = useStaticQuery(graphql`
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
				{authors.allContentfulAuthor.nodes.map((node) => (
					<li key={node.id}>{node.fullName}</li>
				))}
			</ul>
		</div>
	);
};
