import React from "react";

export const Categories = ({ categories }) => {
	return (
		<div>
			<h1>Categories</h1>
			<ul>
				{categories.nodes.map((node) => (
					<>
						<li key={node.id}>{node.title}</li>
					</>
				))}
			</ul>
		</div>
	);
};
