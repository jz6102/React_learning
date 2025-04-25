import './App.css'
import Course from './course'
import Footer from './footer'
import react from './assets/react.svg';
import ang from './assets/angular.svg';
import nxt from './assets/next.svg';

function App() {
  return (
    <>
    <Course name="React" price="$100" img={react}/>
    <Course name="Angular" price="$100" img={ang}/>
    <Course name="Next" price="$100" img={nxt} />
    <Footer/>
    </>
  );
}


export default App