import { gql } from "apollo-server";

export default gql`
    type Course {
        id: ID!
        name: String!
        url: String!
    }
    extend type Query {
        getCourses: [Course],
        getCourse(id: ID!): Course
    }
    extend type Mutation {
        addCourse( 
            name: String!,
            url: String!
        ): Course!
        updateCourse(
            id: ID!, 
            name: String!,
            url: String!
        ): Course!
        deleteCourse(id: ID!): Course!
    }
`;