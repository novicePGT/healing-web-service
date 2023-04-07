import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'
import Objectives from './components/Objectives.jsx'
import Brazil from './components/Brazil.jsx';
import Recommend from './components/Recommend.jsx';
import ImageSlider from './components/ImageSlider.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Objectives />
      <Brazil />
      <Recommend />
      <ImageSlider />
    </div>
  );
}

export default App;