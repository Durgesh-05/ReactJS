import { createContext, useState } from 'react';
import { baseUrl } from '../baseUrl';

// 1 - create context
export const AppContext = createContext();

export function ContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [posts, setPosts] = useState([]);

  async function fetchBlogPosts(page = 1) {
    const url = `${baseUrl}?page=${page}`;
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setPage(data.page);
      setTotalPages(data.totalPages);
      setPosts(data.posts);
    } catch (error) {
      console.error(`Cannot fetch Blogs ERROR: ${error}`);
    }
  }

  function pageChangeHandler(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    posts,
    setPosts,
    fetchBlogPosts,
    pageChangeHandler,
  };
  // 2 - Pass context to children
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

  // 3 - children consume context by using useContext
}
