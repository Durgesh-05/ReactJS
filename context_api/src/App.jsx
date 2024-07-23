import { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import { Header } from './components/Header';
import { Blogs } from './components/Blogs';
import { Footer } from './components/Footer';

function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main className="content">
        <Blogs />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
