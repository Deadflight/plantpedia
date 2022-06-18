import { graphql } from "gatsby";
import * as React from "react";
import { Categories } from "../components/categories";

// markup
const IndexPage = ({ data }) => {
	const { allContentfulCategory } = data;

	return (
		<>
			<Categories categories={allContentfulCategory} />
		</>
	);
};

export const pageQuery = graphql`
	query {
		allContentfulCategory {
			nodes {
				title {
					title
				}
				id
				template
			}
		}
	}
`;

export default IndexPage;
