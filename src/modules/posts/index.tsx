// @ts-nocheck
import {
  useAddNewPostMutation,
  useGetPostsQuery,
} from "logic/rtk-query/apiSlice";
import { PrimaryBtn } from "shared/button/style";
import { Err } from "shared/styles/styled";

const Posts = () => {
  const {
    data: posts,
    isLoading: postLoading,

    isError,
  } = useGetPostsQuery();

  const [addNewPost] = useAddNewPostMutation();

  if (postLoading) {
    return <h1>Posts loading...</h1>;
  }

  if (isError) {
    return <Err>Error while fetching posts..</Err>;
  }
  return (
    <>
      <PrimaryBtn
        onClick={() =>
          addNewPost({ id: 101, title: "Hello", userId: 11, body: "World" })
        }
      >
        Add post
      </PrimaryBtn>

      <ul>
        {posts.map((post: any, index: number) => (
          <li key={index}>
            {index + 1}. {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
