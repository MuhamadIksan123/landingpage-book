import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Novel from './components/Novel';
import Komik from './components/Komik';
import Footer from './components/Footer';
import './style/landingPage.css'

function App() {
  return (
    <div>
      <div className="intro">
        <NavigationBar />
        <Intro />
      </div>

      <div className="novel">
        <Novel />
      </div>

      <div className="komik">
        <Komik />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
