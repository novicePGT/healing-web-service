import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'
import Objectives from './components/Objectives.jsx'
import Brazil from './components/Brazil.jsx';
import Recommend from './components/Recommend.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Objectives />
      <Brazil />
      <Recommend />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;