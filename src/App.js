import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About'
import News from './components/News'
import Contact from './components/Contact';




function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Home />
      <Footer/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





