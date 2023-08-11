import "./App.css";
import Heder from "./components/Home/hedar/Heder";
import Footer from "./components/Home/footer/Footer";
import Home from "./components/Home/Home";
import Authentivation from "./components/authentication/Authentication";
import SearchPage from "./components/Home/content/SearchPage/SearchPage";
import AppContext from "./context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <AppContext>
        <BrowserRouter>
          <Heder />
          <Routes>
            <Route path="/auth" element={<Authentivation />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/busroutes/Search/:source?/:destination?"
              element={<SearchPage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext>
    </div>
  );
}

export default App;
