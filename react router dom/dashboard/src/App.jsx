import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";

import PreSale from "./components/contentWrap/PreSale";
import Statistics from "./components/contentWrap/Statistics";
import NextReleases from "./components/contentWrap/NextReleases";
import MostPopulars from "./components/contentWrap/MostPopulars";
import Genres from "./components/contentWrap/Genres";
import GenreDetail from "./components/contentWrap/details/GenreDetail";

import Layout from "./components/layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/" element={<Layout />} >
          <Route path='pre-sale' element={<PreSale/>}/>
          <Route path='statistics' element={<Statistics/>}/>
          <Route path='next-releases' element={<NextReleases/>}/>
          <Route path='most-populars' element={<MostPopulars/>}/>
          <Route path='genres' element={<Genres/>}/>
          <Route path='genres/:id' element={<GenreDetail/>}/>
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

