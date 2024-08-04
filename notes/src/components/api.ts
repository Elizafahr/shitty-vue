// Примеры постов для демонстрации
export const postsArr = [
  {
    id: 1,
    title: "Первая запись",
    body: "Это первая запись.",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Вторая запись",
    body: "Это вторая запись.",
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "3я запись",
    body: "Это 3 запись.",
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "5я запись",
    body: "Это 5 запись.",
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "6 запись",
    body: "Это 6 запись.",
    createdAt: new Date(),
  },
  {
    id: 6,
    title: "7 запись",
    body: "Это 7 запись.",
    createdAt: new Date(),
  },
  {
    id: 7,
    title: "8я запись",
    body: "Это 8 запись.",
    createdAt: new Date(),
  },
  {
    id: 8,
    title: "9я запись",
    body: "Это 9 запись.",
    createdAt: new Date(),
  },
]; 

export async function fetchPostById(id: number): Promise<any | null> {
  try {
    const res = postsArr.find((note) => note.id == id);
    if (!res) {
      return null;
    }
    return res;
  } catch (error) {
    throw error;
  }
}

 