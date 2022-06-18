import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const Categories = () => {
	const { allContentfulCategory } = useStaticQuery(graphql`
		query {
			allContentfulCategory {
				nodes {
					title {
						title
					}
					id
				}
			}
		}
	`);
	return (
		<div>
			<h1>Categories</h1>
			<ul>
				{allContentfulCategory.nodes.map((node) => (
					<>
						<li key={node.id}>{node.title.title}</li>
					</>
				))}
			</ul>
		</div>
	);
};
