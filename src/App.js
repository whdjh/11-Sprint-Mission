import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarketPage from "./pages/MarketPage/MarketPage";
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="items" element={<MarketPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
