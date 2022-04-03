import React, { useContext, useEffect } from 'react';
import './App.scss';
import './SCSS/Main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import AddUnitPage from './Pages/AddUnitPage/AddUnitPage';
import PostDetailsPage from './Pages/PostDetailsPage/PostDetailsPage';
import ComparePage from './Pages/ComparePage/ComparePage';
import UnitContext from './Context/PostContext';
import LoginPage from './Pages/LoginPage/LoginPage';
import { setAuthroizationHeader } from './api';
import EditUnitPage from './Pages/EditUnitPage/EditUnitPage';

const App = (): JSX.Element => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UnitContext);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const tokenExpirationTime = sessionStorage.getItem('tokenExpirationTime');
    if (token && tokenExpirationTime) {
      const tokenExpirationDateTime = new Date(parseInt(tokenExpirationTime, 10));
      if (tokenExpirationDateTime > new Date()) {
        setIsLoggedIn(true);
        setAuthroizationHeader(token);
      } else {
        sessionStorage.clear();
      }
    }
  }, [setIsLoggedIn]);

  if (isLoggedIn) {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vordlus" element={<ComparePage />} />
            <Route path="/galerii" element={<GalleryPage />} />
            <Route path="/kirje/:id" element={<PostDetailsPage />} />
            <Route path="/kirje/lisa" element={<AddUnitPage />} />
            <Route path="/kirje/muuda/:id" element={<EditUnitPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  return (
    <LoginPage />
  );
};

export default App;
