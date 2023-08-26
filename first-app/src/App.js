import logo from "./logo.svg";
import "./App.css";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

let name = "Arkit Sutariya";
let myObj = { name: "Arkit", age: 20 };
function App() {
  return (
    <>
      {/* 1 */}
      {/* <div className="App">
        <h1>{myObj.age}</h1>
        <h1>{name}</h1>
        <h2>{5 + 5}</h2>
        <h1>This is from first-app</h1>

      </div> */}

      {/* 2 */}
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with Arkit
          </a>
        </header>

      </div> */}

      <>
        {/* 1 function component */}
        <Header />
        <Sidebar />
        <Footer />
      </>
    </>
  );
}

export default App;
