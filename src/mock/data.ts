import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import type { PostStatus, PostType, PublishStatus } from "./enum";

export interface Post {
  id: number;
  image: string;
  title: string;
  description: string;
  type: PostType;
  sharingTime: string;
  status: PostStatus;
  publishStatus: PublishStatus;
  author: string;
  actions: React.ElementType[];
}

export const posts: Post[] = [
  {
    id: 1, image: "/images/post1.svg",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə",
    type: "News", sharingTime: "2026-11-06T10:19:00Z", status: "Active", publishStatus: "Published", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 2, image: "/images/post2.svg",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə",
    type: "Announcement", sharingTime: "2026-11-06T10:19:00Z", status: "InActive", publishStatus: "Draft", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 3, image: "/images/post3.svg",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə",
    type: "News", sharingTime: "2026-11-06T10:19:00Z", status: "Active", publishStatus: "Draft", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 4, image: "/images/post1.svg",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə",
    type: "Announcement", sharingTime: "2025-11-08 13:00", status: "Active", publishStatus: "Published", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 5, image: "/images/post1.svg",
    title: "Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə",
    type: "News", sharingTime: "2025-11-08 14:00", status: "InActive", publishStatus: "Draft", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 6, image: "/images/post2.svg",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə",
    type: "Announcement", sharingTime: "2025-11-08 15:00", status: "Active", publishStatus: "Draft", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 7, image: "/images/post1.svg",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə",
    type: "Announcement", sharingTime: "2025-11-08 16:00", status: "Active", publishStatus: "Published", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 8, image: "/images/post2.svg",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə",
    type: "News", sharingTime: "2025-11-08 17:00", status: "InActive", publishStatus: "Draft", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 9, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Praesent mauris.", type: "Announcement", sharingTime: "2025-11-08 18:00", status: "Active", publishStatus: "Draft", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 10, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Fusce nec tellus sed augue semper porta.", type: "Announcement", sharingTime: "2025-11-08 19:00", status: "Active", publishStatus: "Published", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 11, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Mauris massa.", type: "News", sharingTime: "2025-11-08 20:00", status: "InActive", publishStatus: "Draft", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 12, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Vestibulum lacinia arcu eget nulla.", type: "Announcement", sharingTime: "2025-11-08 21:00", status: "Active", publishStatus: "Draft", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 13, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Class aptent taciti sociosqu ad litora torquent.", type: "Announcement", sharingTime: "2025-11-08 22:00", status: "Active", publishStatus: "Published", author: "Kmlvaaz", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 14, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Per conubia nostra, per inceptos himenaeos.", type: "News", sharingTime: "2025-11-08 23:00", status: "InActive", publishStatus: "Draft", author: "Nina", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 15, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Curabitur sodales ligula in libero.", type: "Announcement", sharingTime: "2025-11-09 00:00", status: "Active", publishStatus: "Draft", author: "Oscar", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 16, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Sed dignissim lacinia nunc.", type: "Announcement", sharingTime: "2025-11-09 01:00", status: "Active", publishStatus: "Published", author: "Paula", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 17, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Curabitur tortor.", type: "News", sharingTime: "2025-11-09 02:00", status: "InActive", publishStatus: "Draft", author: "Quinn", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 18, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Pellentesque nibh.", type: "Announcement", sharingTime: "2025-11-09 03:00", status: "Active", publishStatus: "Draft", author: "Rachel", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 19, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "Aenean quam.", type: "Announcement", sharingTime: "2025-11-09 04:00", status: "Active", publishStatus: "Published", author: "Steve", actions: [BsPencilSquare ,BsTrash3]
  },
  {
    id: 20, image: "/images/post1.svg", title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    description: "In scelerisque sem at dolor.", type: "News", sharingTime: "2025-11-09 05:00", status: "InActive", publishStatus: "Draft", author: "Tina", actions: [BsPencilSquare ,BsTrash3]
  },
];
