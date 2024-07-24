import { blogItems } from "@/components/posts";
const posts = blogItems;

export async function fetchPostById(id) {
  try {
    const res = posts.find((post) => post.id == id);
    if (!res) {
      return null;
    }
    return res;
  } catch (error) {
    throw error;
  }
}
