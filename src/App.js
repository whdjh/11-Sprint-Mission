import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="items" element={<MarketPage />}/>
          <Route path="additem" element={<AddItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
