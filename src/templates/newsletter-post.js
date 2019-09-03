import React from "react";
import PropTypes from "prop-types";
import { kebabCase, startCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent, MarkdownContent } from "../components/Content";

export const NewsletterPostTemplate = ({
  content,
  contentComponent,
  description,
  helmet,
  pdfFile,
  tags,
  title
}) => {
  const PostContent = contentComponent || Content;
  const pdfHref = pdfFile.replace("/static", "");
  return (
    <div>
      {helmet || ""}
      <section className="section is-white">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <h2>Overview</h2>
              <MarkdownContent content={description} />
              {pdfHref ? (
                <a href={pdfHref} className="button is-info is-large m-t-25">
                  Download PDF
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <section className="section is-light">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="box">
                <HTMLContent content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content container">
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h3>Find more related articles:</h3>
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>
                      {startCase(tag)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

NewsletterPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const NewsletterPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <NewsletterPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        pdfFile={post.frontmatter.pdfFile}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

NewsletterPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default NewsletterPost;

export const pageQuery = graphql`
  query NewsletterPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        pdfFile
        tags
      }
    }
  }
`;
