import { GraphQLSchema } from 'graphql';

import { Query } from './queries/queries';
import { Mutation } from './mutations/mutations';

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
