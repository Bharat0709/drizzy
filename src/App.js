import './App.css';
import Home from './components/home/Hero';
import Footer from './components/common/Footer';
import DownloadApp from './components/downloadApp/DownloadApp';
import Features from './components/features/Features';
import TrainersTestimonials from './components/testimonials/TrainersTestimonials';
import OurPartners from './components/partners/OurPartners';
import DriversTestimonials from './components/testimonials/DriversTestimonials';

function App() {
  return (
    <div className='App'>
      <header className=''>
        {/* <Home /> */}
        <Features />
        <DownloadApp />
        <OurPartners />
        <TrainersTestimonials />
        <DriversTestimonials />
        <Footer />
      </header>
    </div>
  );
}

export default App;
