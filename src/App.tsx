import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import Gallery from './Gallery'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#gallery-')) {
        setCurrentView(hash.replace('#gallery-', ''));
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check the URL when the page first loads

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Header />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </>
        ) : (
          <Gallery collectionId={currentView} />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
