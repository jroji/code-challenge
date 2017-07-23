export const ARTICLES_QUERY = {
  All: `{
    articles {
      author
      excerpt
      id
      title
    }
  }`,
  One: (id) => `{
  article(id: "${id}") {
    author
    excerpt
    title
    content
    tags
  }
}`
};

export const ARTICLES_MUTATION = {
  Remove: (id) => `mutation {
    remove(id: "${id}") {
      author
      id
      excerpt
      title
    }
  }`,
  Add: (data) => `mutation {
    add(title: "${data.title}", author: "${data.author}", excerpt: "${data.excerpt}", content: "${data.content}", tags: "${data.tags}") {
      author
      id
      excerpt
      title
    }
  }`

}