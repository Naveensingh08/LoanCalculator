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
import MediaGallery from "./MediaGallery";
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
            width: 50px;
            height: 26px;
            background-color: #ccc;
            border-radius: 13px;
            cursor: pointer;
            transition: background-color 0.3s;
            position: relative;
          }

          .theme-toggle-circle {
            width: 20px;
            height: 20px;
            background-color: white;
            border-radius: 50%;
            transition: transform 0.3s;
            position: absolute;
            top: 3px;
            left: 3px;
          }

          .theme-toggle.dark {
            background-color: #444;
          }

          .theme-toggle.dark .theme-toggle-circle {
            transform: translateX(24px);
          }

          .content-wrapper {
            padding-top: 100px;
            padding-left: 15px;
            padding-right: 15px;
          }

          @media (max-width: 768px) {
            .theme-toggle {
              width: 40px;
              height: 20px;
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

        <header className={`w-100 ${darkMode ? 'bg-dark text-light' : 'bg-primary text-white'} py-2 fixed-top`}>
          <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <h3 className="mb-2 mb-md-0">Loan Calculator</h3>
            <nav className="d-flex flex-wrap gap-3">
              <Link to="/home" className="text-white text-decoration-none">Home</Link>
              <Link to="/exchangeRate" className="text-white text-decoration-none">Exchange Rates</Link>
              <Link to="/about" className="text-white text-decoration-none">About</Link>
              <Link to="/media" className="text-white text-decoration-none">Media</Link>
              <Link to="/errorPage" className="text-white text-decoration-none">ErrorPage</Link>
              <div
                onClick={toggleTheme}
                className={`theme-toggle ${darkMode ? 'dark' : ''}`}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <div className="theme-toggle-circle"></div>
              </div>
            </nav>
          </div>
        </header>

        <main className="content-wrapper container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/exchangeRate" element={<ExchangeRate />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<MediaGallery />} />
            <Route path="/errorPage" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
