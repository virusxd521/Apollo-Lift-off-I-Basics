// const { gql } = require('apollo-server');
const { gql } = require('apollo-server');

// gql ---
const typeDefs = gql`

  type Query{
    "Query to get tracks array for the homepage grid"
    tracksForHome:[Track!]!
  }


  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String 
    length: Int 
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;