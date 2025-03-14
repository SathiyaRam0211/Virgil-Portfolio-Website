import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AppWrapper } from "./utils/util-styles";
import Page from "./pages/Page";
import { Suspense } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Page />} path="/" />
          </Routes>
        </Suspense>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
