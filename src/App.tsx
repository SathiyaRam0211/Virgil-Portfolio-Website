import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AppWrapper } from "./utils/util-styles";
import Page from "./pages/Page";
import { Suspense, useEffect, useState } from "react";
import backgroundImage from "./assets/Background.jpg";

const App = () => {
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setIsBgLoaded(true);
  }, []);

  return (
    <BrowserRouter>
      {isBgLoaded ? (
        <AppWrapper $bgImage={backgroundImage}>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Page />} path="/" />
            </Routes>
          </Suspense>
        </AppWrapper>
      ) : (
        <div>Loading...</div>
      )}
    </BrowserRouter>
  );
};

export default App;
