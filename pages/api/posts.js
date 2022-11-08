// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {client} from '../../lib/client';

export default async function posts(req, res) {

  // res.status(200).json({ name: 'John Doe' })
  const {start, end} = req.query;
  const {posts, total} = await loadPosts(start, end);
  res.status(200).json({ posts,total });
}

export const loadPosts = async (start, end) => {
  const query = `{
    "posts": *[_type=="post"] | order(publishDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
    "total": count(*[_type=="post"])
  }`;
  const {posts, total} = await client.fetch(query)

  return {
    posts,
    total
  }
}
