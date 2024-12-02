import './App.css';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Index from './pages/index';
import Rooms from './pages/rooms';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/foot';
import MenuSection from './components/menusection';
import News from './pages/news';
import BookingScreen from './pages/bookingscreen';
import Rooms2 from './pages/room2';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <MenuSection  />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/room2' element={<Rooms2 />} />
        <Route path='/news' element={<News/>}/>
        <Route path="/:roomid" element={<BookingScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
