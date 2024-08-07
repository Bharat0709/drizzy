import './App.css';
import Footer from './components/common/footer';
import DownloadApp from './components/downloadApp/DownloadApp';
import Features from './components/features/Features';
import TrainersTestimonials from './components/testimonials/TrainersTestimonials';
import OurPartners from './components/partners/OurPartners';
import DriversTestimonials from './components/testimonials/DriversTestimonials';
import AboveFeatures from './components/features/AboveFeatures';
import BookDriver from './components/booking/BookDriver';
import Hero from './components/home/Hero';

function App() {
  return (
    <div className='App'>
      <header className=''>
        <Hero />
        <AboveFeatures />
        <Features />
        <DownloadApp />
        <OurPartners />
        <TrainersTestimonials />
        <BookDriver />
        <DriversTestimonials />
        <Footer />
      </header>
    </div>
  );
}

export default App;
