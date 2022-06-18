import { graphql } from "gatsby";
import React from "react";

const BlogPost = ({ data }) => {
	return (
		<div>
			<h1>{data.contentfulPlant.slug}</h1>
			<p>{data.contentfulPlant.author.fullName}</p>
			<p>{data.contentfulPlant.plantName.plantName}</p>
		</div>
	);
};

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		contentfulPlant(slug: { eq: $slug }) {
			slug
			author {
				fullName
			}
			plantName {
				plantName
			}
		}
	}
`;

export default BlogPost;
