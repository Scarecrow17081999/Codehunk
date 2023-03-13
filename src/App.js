import './App.css';
import './components/Footer.css'
import './components/GoogleMap.css'
import "./components/AppComp.css";
import './components/FooterBottom.css'
import './components/Header1.css'

import NavTab from './components/NavTab';
import BlogCard from './BlogCard';
import Header from './Header';
import { blogArr } from './Constants';
import Whyso from './Swiperr';
import ProjectDiv from './Projectdiv';
import ClientDiv from './ClientsDiv';
import TestimonialCarousel from './TestimonialCarousel';
import Sec from './Sec'
import TeamCard from './TeamCard'
import GifSec from './GifSec';
import TcardHead from './components/TcardHead';
import ProductGrid from './components/NavTab'
// import MarqueeSec from './MarqueeSec';
// import Welcome from './components/Hone'
import AppComp from './components/AppComp';
import GoogleMap from './components/GoogleMap';
import './components/Connectwithus.css';
import Connectwithus from './components/Connectwithus';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import Header1 from './components/Header1';
function App() {
  const blogCard = blogArr.map((item, pos) => {
    return (
      <BlogCard
        key={pos}
        title={item.title}
        description={item.description}
        id={item.id}
      />
    );
  });

  return (
    <div className='App'>
    <Header1/>
      <NavTab/>
      <Sec/>      
      <div className='appUnder'>{blogCard}</div>
      <Header />
      <Whyso />
      <ProjectDiv />
      <ClientDiv />
      <TestimonialCarousel/>
      <GifSec/>
      <TcardHead/>
      <TeamCard/>
      {/* <ProductGrid/> */}
      <AppComp />
      {/* <MarqueeSec/> */}
<GoogleMap/>
      <Connectwithus/>
      <Footer/>
      <FooterBottom/>
    </div>
  );
}

export default App;
