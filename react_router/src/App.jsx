import { useState } from 'react';
import './App.css';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { Home } from './components/Home.jsx';
import { Support } from './components/Support.jsx';
import { About } from './components/About.jsx';
import { Contact } from './components/Contact.jsx';
import { NotFound } from './components/NotFound.jsx';
import { MainHeader } from './components/MainHeader.jsx';

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      {/* By using navlink we can determine which route is we move to that is active route navlink adds a active class to that route which has been clicked */}

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* This is normal routing */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/support" element={<Support />} /> */}
      {/* Star means path not included i.e 404 page */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}

      <Routes>
        {/* This is parent route */}
        <Route path="/" element={<MainHeader />}>
          {/* This are the child routes */}
          {/* But by this we dont get any routes content only home contents so to avoid this we use <Outlet> in home so this routes treated as child */}
          {/* But by using Outlet home content is invisible so we are going to index it */}
          {/* By giving index it will know if no route matches this is deafault route but we have to understand how this and * works differently */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          {/* Star means path not included i.e 404 page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
