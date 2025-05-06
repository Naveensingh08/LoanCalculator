// import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import ExchangeRate from "./ExchangeRate"
// import About from "./About"
// import ErrorPage from "./ErrorPage"
// import 'bootstrap/dist/css/bootstrap.min.css';



// function App() {
  

//   return (
//     <>
//      <BrowserRouter>
     
// <header
//       className="bg-primary text-white w-100"
//       style={{ height: '80px', position: 'fixed', top: 0, zIndex: 1030 }}
//     >
//       <div className="container-fluid h-100 d-flex align-items-center justify-content-between">
//         <h3 className="mb-0" style={{ marginLeft: '25px' }}>Loan Calculator</h3>
//         <nav className="d-flex gap-4 me-5">
//           <Link to="/home" className="text-white text-decoration-none">Home</Link>
//           <Link to="/exchangeRate" className="text-white text-decoration-none">Exchange Rates (Live)</Link>
//           <Link to="/about" className="text-white text-decoration-none">About</Link>
//           <Link to="/errorPage" className="text-white text-decoration-none">ErrorPage</Link>
//         </nav>
//       </div>
//     </header>
//   <Routes>
//       <Route path="/home" element={<Home/>}/>
//       <Route path="/exchangeRate" element={<ExchangeRate/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/errorPage" element={<ErrorPage/>}/>
//      </Routes>
     
//      </BrowserRouter> 
//     </>
//   )
// }

// export default App

import { useState } from "react"; 
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ExchangeRate from "./ExchangeRate";
import About from "./About";
import ErrorPage from "./ErrorPage";
import NotFound from "./NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const appTheme = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <BrowserRouter>
      <div className={`min-vh-100 ${appTheme}`}>

        <style>{`
          .theme-toggle {
            position: relative;
            width: 50px;
            height: 26px;
            background-color: #ccc;
            border-radius: 13px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .theme-toggle-circle {
            position: absolute;
            top: 3px;
            left: 3px;
            width: 20px;
            height: 20px;
            background-color: white;
            border-radius: 50%;
            transition: transform 0.3s;
          }

          .theme-toggle.dark {
            background-color: #444;
          }

          .theme-toggle.dark .theme-toggle-circle {
            transform: translateX(24px);
          }

          header {
            height: auto;
            position: fixed;
            top: 0;
            z-index: 1030;
            width: 100%;
            padding: 10px 0;
          }

          .header-container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
          }

          .nav-links {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            margin-top: 10px;
          }

          .nav-links a {
            transition: color 0.3s ease;
            color: white;
            text-decoration: none;
            font-weight: 500;
          }

          .nav-links a:hover {
            color: #f0f0f0;
          }

          .content-wrapper {
            padding-top: 120px;
            padding-left: 15px;
            padding-right: 15px;
          }

          @media (max-width: 768px) {
            .header-container {
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
            }

            .theme-toggle {
              width: 40px;
              height: 20px;
              margin-top: 10px;
            }

            .theme-toggle-circle {
              width: 16px;
              height: 16px;
              top: 2px;
              left: 2px;
            }

            .theme-toggle.dark .theme-toggle-circle {
              transform: translateX(18px);
            }
          }
        `}</style>

        <header className={`w-100 ${darkMode ? 'bg-dark text-light' : 'bg-primary text-white'}`}>
          <div className="container header-container">
            <h3 className="mb-0">Loan Calculator</h3>
            <nav className="nav-links">
              <Link to="/home" >Home</Link>
              <Link to="/exchangeRate" style={{marginLeft:'20px'}}>Exchange Rates (Live)</Link>
              <Link to="/about" style={{marginLeft:'20px'}}>About</Link>
              <Link to="/errorPage" style={{marginLeft:'20px'}}>ErrorPage</Link>
              <div
                onClick={toggleTheme}
                className={`theme-toggle ${darkMode ? 'dark' : ''}`}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                style={{marginLeft:'10px'}}
              >
                <div className="theme-toggle-circle"></div>
              </div>
            </nav>
          </div>
        </header>

        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/exchangeRate" element={<ExchangeRate />} />
            <Route path="/about" element={<About />} />
            <Route path="/errorPage" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
