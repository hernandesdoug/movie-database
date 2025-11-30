import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./src/pages/MovieList";


function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />

        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;