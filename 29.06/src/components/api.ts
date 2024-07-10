// api.ts
import axios from 'axios';

export async function fetchPosts(page: number, limit: number): Promise<any[]> {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });

    return response;
  } catch (error) {
    throw error;  
  }
}

// api.ts
export async function fetchPostById(id: number): Promise<any | null> {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
