import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Search from "./pages/Search";
import GetImage from "./pages/GetImage";
import Invoices from "./pages/Invoices";
import GetAllInvoices from "./pages/GetAllInvoices";
import GetSpecificInvoice from "./pages/GetSpecificInvoice";
import PageNotFound from "./pages/PageNotFound";
import SubComponents from './pages/SubComponents';

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <h1>Welcome to a practice of react-redux</h1>
      {/* Another provider but with its own provider definition */}

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='invoices' element={<Invoices />}>
          <Route path='all' element={<GetAllInvoices/>}>
            <Route path=':id' element={<GetSpecificInvoice />} />
          </Route>

        </Route>

        <Route path='about' element={<About />}>
          <Route path='search/:id' element={<Search />} />
          <Route path='image' element={<GetImage />} />
        </Route>

        <Route path='subcomponents/*' element={<SubComponents/>}></Route>

        <Route path='*' element={<PageNotFound/>}></Route>

      </Routes>

    </div>

  );
}

export default App;
