
import './App.css';
import AboutContainer from "./components/AboutContainer";
// import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    
    <div className="App">
     
        <Nav />
        {/* <AboutMe /> */}
        <div className="sidebarContainer">
        <Sidebar />
        <AboutContainer />
        </div>
    </div>
   
  );
}

export default App;
