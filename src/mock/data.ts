export interface Post {
  id: number;
  post: string;
  description: string;
  type: string;
  sharingTime: string;
  status: "Active" | "Inactive" | "Pending";
  publishStatus: "Published" | "Draft" | "Scheduled";
  author: string;
  actions: string;
}

export const posts: Post[] = [
  { id: 1, post: "Post 1", description: "Lorem ipsum dolor sit amet.", type: "Article", sharingTime: "2025-11-08 10:00", status: "Active", publishStatus: "Published", author: "Alice", actions: "Edit/Delete" },
  { id: 2, post: "Post 2", description: "Consectetur adipiscing elit.", type: "Video", sharingTime: "2025-11-08 11:00", status: "Inactive", publishStatus: "Draft", author: "Bob", actions: "Edit/Delete" },
  { id: 3, post: "Post 3", description: "Integer nec odio.", type: "Article", sharingTime: "2025-11-08 12:00", status: "Pending", publishStatus: "Scheduled", author: "Charlie", actions: "Edit/Delete" },
  { id: 4, post: "Post 4", description: "Praesent libero.", type: "Blog", sharingTime: "2025-11-08 13:00", status: "Active", publishStatus: "Published", author: "David", actions: "Edit/Delete" },
  { id: 5, post: "Post 5", description: "Sed cursus ante dapibus diam.", type: "Article", sharingTime: "2025-11-08 14:00", status: "Inactive", publishStatus: "Draft", author: "Emma", actions: "Edit/Delete" },
  { id: 6, post: "Post 6", description: "Sed nisi.", type: "Video", sharingTime: "2025-11-08 15:00", status: "Pending", publishStatus: "Scheduled", author: "Frank", actions: "Edit/Delete" },
  { id: 7, post: "Post 7", description: "Nulla quis sem at nibh elementum imperdiet.", type: "Blog", sharingTime: "2025-11-08 16:00", status: "Active", publishStatus: "Published", author: "Grace", actions: "Edit/Delete" },
  { id: 8, post: "Post 8", description: "Duis sagittis ipsum.", type: "Article", sharingTime: "2025-11-08 17:00", status: "Inactive", publishStatus: "Draft", author: "Hannah", actions: "Edit/Delete" },
  { id: 9, post: "Post 9", description: "Praesent mauris.", type: "Video", sharingTime: "2025-11-08 18:00", status: "Pending", publishStatus: "Scheduled", author: "Ian", actions: "Edit/Delete" },
  { id: 10, post: "Post 10", description: "Fusce nec tellus sed augue semper porta.", type: "Blog", sharingTime: "2025-11-08 19:00", status: "Active", publishStatus: "Published", author: "Jane", actions: "Edit/Delete" },
  { id: 11, post: "Post 11", description: "Mauris massa.", type: "Article", sharingTime: "2025-11-08 20:00", status: "Inactive", publishStatus: "Draft", author: "Kevin", actions: "Edit/Delete" },
  { id: 12, post: "Post 12", description: "Vestibulum lacinia arcu eget nulla.", type: "Video", sharingTime: "2025-11-08 21:00", status: "Pending", publishStatus: "Scheduled", author: "Laura", actions: "Edit/Delete" },
  { id: 13, post: "Post 13", description: "Class aptent taciti sociosqu ad litora torquent.", type: "Blog", sharingTime: "2025-11-08 22:00", status: "Active", publishStatus: "Published", author: "Mike", actions: "Edit/Delete" },
  { id: 14, post: "Post 14", description: "Per conubia nostra, per inceptos himenaeos.", type: "Article", sharingTime: "2025-11-08 23:00", status: "Inactive", publishStatus: "Draft", author: "Nina", actions: "Edit/Delete" },
  { id: 15, post: "Post 15", description: "Curabitur sodales ligula in libero.", type: "Video", sharingTime: "2025-11-09 00:00", status: "Pending", publishStatus: "Scheduled", author: "Oscar", actions: "Edit/Delete" },
  { id: 16, post: "Post 16", description: "Sed dignissim lacinia nunc.", type: "Blog", sharingTime: "2025-11-09 01:00", status: "Active", publishStatus: "Published", author: "Paula", actions: "Edit/Delete" },
  { id: 17, post: "Post 17", description: "Curabitur tortor.", type: "Article", sharingTime: "2025-11-09 02:00", status: "Inactive", publishStatus: "Draft", author: "Quinn", actions: "Edit/Delete" },
  { id: 18, post: "Post 18", description: "Pellentesque nibh.", type: "Video", sharingTime: "2025-11-09 03:00", status: "Pending", publishStatus: "Scheduled", author: "Rachel", actions: "Edit/Delete" },
  { id: 19, post: "Post 19", description: "Aenean quam.", type: "Blog", sharingTime: "2025-11-09 04:00", status: "Active", publishStatus: "Published", author: "Steve", actions: "Edit/Delete" },
  { id: 20, post: "Post 20", description: "In scelerisque sem at dolor.", type: "Article", sharingTime: "2025-11-09 05:00", status: "Inactive", publishStatus: "Draft", author: "Tina", actions: "Edit/Delete" },
];
