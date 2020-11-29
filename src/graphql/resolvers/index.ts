import usersResolvers from "./users";
import courseResolvers from './courses';

export default {
  Query: {
    ...usersResolvers.Query,
    ...courseResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...courseResolvers.Mutation
  }
};
