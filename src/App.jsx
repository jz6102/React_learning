import './App.css'
import Footer from './footer'
import CourseList from './courseList'



function App() {
  return (
    <>
    <CourseList/>
     <a href="/cv.pdf" download="My_CV.pdf">
        <button>Download CV</button>
      </a>
    <Footer/>
    </>
  );
}


export default App