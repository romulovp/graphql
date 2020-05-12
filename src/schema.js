import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import rootQuery from './module/rootQuery';
import rootMutation from './module/rootMutation';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      ...rootQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationTyoe",
    fields: {
      ...rootMutation
    }
  })
});