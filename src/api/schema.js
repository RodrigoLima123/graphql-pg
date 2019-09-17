const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');


const usersAttribs = `
    id: ID
    name: String!
    email: String!
    password: String!
`

const typeDefs = `
    type User {
        ${usersAttribs}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${usersAttribs}
    }

    type Mutation {
        createUser(input: UserInput): User
    }

`
// Mutation precisa de input, e a Query precisa de Type //


module.exports = makeExecutableSchema({ typeDefs, resolvers })