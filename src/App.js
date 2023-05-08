// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import './App.css';
const Home = lazy(() => import('./pages/home'));

function App() {
  return (
   <div>  
 <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      </div>
  );
}

export default App;


// import { Routes, Route } from 'react-router-dom';
// import { Layout } from './Layout/Layout';
// import { lazy } from 'react';

// const Home = lazy(() => import('../Pages/Home/Home'));
// const Movies = lazy(() => import('../Pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

// export const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="movies" element={<Movies />} />
//           <Route path="movies/:movieId" element={<MovieDetails />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// };
