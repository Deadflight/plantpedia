import { graphql } from "gatsby";
import * as React from "react";
import { Categories } from "../components/categories";

// markup
const IndexPage = ({ data }) => {
	const { allContentfulCategorietest } = data;

	return (
		<>
			<Categories categories={allContentfulCategorietest} />
		</>
	);
};

export const pageQuery = graphql`
	query {
		allContentfulCategorietest {
			nodes {
				title
				id
			}
		}
	}
`;

export default IndexPage;
