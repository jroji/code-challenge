import { articleType } from './../models/article.type';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import db from './../db';

export const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find().where('published').equals(true);
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        },
      },
      resolve(parent, args) {
        return db.Article.findById(args.id);
      },
    },
  }),
});