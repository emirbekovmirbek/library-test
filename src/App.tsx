import React from 'react';
import Header from './view/components/header/Header';
import Main from './view/page/main/Main';
import {Route, Routes, useLocation} from "react-router-dom";
import WishList from './view/page/wishList/WishList';
import ChangeBook from './view/page/changebook/ChangeBook';
import {Helmet} from "react-helmet";

type Title = {
  [key: string]: string
}
function App() {
  const location = useLocation();
  const title: Title = {
    '/wish-book': 'I Wish',
    '/': 'Home',
  }
  return (
    <div className="App app__wrapper">
      <Helmet>
        <title>{title[location.pathname as keyof Title]}</title>
      </Helmet>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="book/:id" element={<ChangeBook/>}/>
        <Route path="/wish-book/" element={<WishList/>}/>
      </Routes>
    </div>
  );
}

export default App;