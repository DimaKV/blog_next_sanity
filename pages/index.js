import React from "react";
import {
  BuyMeCoffee,
  Cover,
  SocialNetworks,
  Section,
  Title,
  Post,
  PostGrid,
  Button,
} from "../components";
import { loadPosts } from "./api/posts";
import Head from "next/head";

const LOAD_STEP = 1;

export default function Home({ initialPosts, total }) {
  // console.log("initialPosts", initialPosts);
  const [posts, setPosts] = React.useState(initialPosts);
  const [count, setCount] = React.useState(LOAD_STEP);
  const [loading, setLoading] = React.useState(false);
  const isLoadingButton = total > count;
  const getMorePosts = async () => {
    setLoading(true);
    try {
      const data = await fetch(`/api/posts?start=${count}&end=${count + LOAD_STEP}`)
          .then( body => body.json());
      setPosts([...posts, ...data.posts]);
      setCount(count + LOAD_STEP);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }

  }
  return (
    <div>
      <Head>
        <title>My blog</title>
      </Head>
      <Section>
        <Cover title="New<br/> User" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </PostGrid>
        {isLoadingButton && (
          <div>
            <Button disabled={loading} onClick={getMorePosts}>Load more...</Button>
          </div>
        )}
      </Section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_STEP);

  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};
