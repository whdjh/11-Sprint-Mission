import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarketPage from "./pages/MarketPage/MarketPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="items" element={<MarketPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
