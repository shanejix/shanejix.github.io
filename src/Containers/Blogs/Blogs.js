import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import BlogHome from "../../Components/BlogHome/BlogHome";
import { config } from "../../config";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogsFromGithubIssues();
  }, []);

  function getBlogsFromGithubIssues() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(config.githubConvertedToken)}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
          {
            repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
              issues(first: 100, states: OPEN) {
                nodes {
                  title
                  body
                  bodyHTML
                  bodyHTML
                  author {
                    url
                    avatarUrl
                    login
                  }
                  updatedAt
                  id
                }
              }
            }
          }
        `
      })
      .then(result => {
        setBlogsFunction(result.data.repository.issues.nodes)
        console.log(result.data.repository.issues.nodes);
      });
  }

  function setBlogsFunction(array) {
    setBlogs(array);
  }
  return <div>
    {blogs.map((v, i) => {
      return <BlogHome blog={v} key={i} />
    })}
  </div>;
}

export default Blogs;