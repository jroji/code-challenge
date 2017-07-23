import { articleType } from './../models/article.type';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';
import db from './../db';


export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation of the articles',
  fields: {
    remove: {
      type: new GraphQLList(articleType),
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        },
      },
      resolve: (source, args) => {
        db.Article.findByIdAndRemove(args.id, (err) => { });
        return db.Article.find().where('published').equals(true)
      }
    },
    add: {
      type: articleType,
      args: {
        title: {
          type: new GraphQLNonNull(GraphQLString)
        },
        author: {
          type: new GraphQLNonNull(GraphQLString)
        },
        content: {
          type: new GraphQLNonNull(GraphQLString)
        },
        excerpt: {
          type: new GraphQLNonNull(GraphQLString)
        },
        tags: {
          type: new GraphQLList(GraphQLString)
        },
        published: {
          type: GraphQLBoolean
        }

      },
      resolve: (source, args) => {
        args = args.published ? args : {...args, published: true };
        return db.Article.create(args);
      }
    }
  }
});