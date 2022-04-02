import React from 'react';
import './App.scss';
import './SCSS/Main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import AddUnitPage from './Pages/AddPostPage/AddUnitPage';
import PostDetailsPage from './Pages/PostDetailsPage/PostDetailsPage';
import EditPostPage from './Pages/EditPostPage/EditPostPage';
import ComparePage from './Pages/ComparePage/ComparePage';

const App = ():JSX.Element => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vordlus" element={<ComparePage />} />
        <Route path="/galerii" element={<GalleryPage />} />
        <Route path="/kirje/:id" element={<PostDetailsPage />} />
        <Route path="/kirje/lisa" element={<AddUnitPage />} />
        <Route path="/kirje/muuda/:id" element={<EditPostPage />} />

      </Routes>

    </div>

  </BrowserRouter>
);

export default App;
