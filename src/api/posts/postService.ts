import type { Post } from "./postTypes";
import { posts as mockPosts } from "./postMock";

let posts: Post[] = [...mockPosts];

export const getPosts = async (): Promise<Post[]> =>
  new Promise((res) => setTimeout(() => res(posts), 500));

export const addPost = async (post: Omit<Post, "id">): Promise<Post> =>
  new Promise((res) => {
    const newPost = { id: posts.length + 1, ...post };
    posts.push(newPost);
    setTimeout(() => res(newPost), 500);
  });

export const updatePost = async (updatedPost: Post): Promise<Post> =>
  new Promise((res) => {
    posts = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
    setTimeout(() => res(updatedPost), 500);
  });

export const deletePost = async (id: number): Promise<number> =>
  new Promise((res) => {
    posts = posts.filter((p) => p.id !== id);
    setTimeout(() => res(id), 500);
  });
