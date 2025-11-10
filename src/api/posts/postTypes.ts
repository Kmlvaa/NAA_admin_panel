export type PostType = "News" | "Announcement";
export type PostStatus = "Active" | "InActive";
export type PublishStatus = "Published" | "Draft";

export interface Post {
  id: number;
  image: string;
  title: string;
  slug: string;
  description: string;
  type: PostType;
  sharingTime: string;
  status: PostStatus;
  publishStatus: PublishStatus;
  author: string;
  galleryImages: string[];
}