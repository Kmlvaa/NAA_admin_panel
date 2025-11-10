import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, deletePost, getPosts, updatePost } from "../api/posts/postService";
import type { Post } from "../api/posts/postTypes";

export const usePosts = () =>
    useQuery<Post[], Error>({
        queryKey: ["posts"],
        queryFn: getPosts,
    });

export const useAddPost = () => {
    const queryClient = useQueryClient();

    return useMutation<Post, Error, Omit<Post, "id">>({
        mutationFn: addPost,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"]}),
    });
};
export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, Post>({
    mutationFn: updatePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"]}),
  });
};
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation<number, Error, number>({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"]}),
  });
};