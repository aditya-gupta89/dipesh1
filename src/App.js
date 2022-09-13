import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.scss';
import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
