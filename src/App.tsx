import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AppWrapper } from "./utils/util-styles";
import Page from "./pages/Page";
import { Suspense, useEffect, useState } from "react";
import backgroundImage from "./assets/Background.jpg";
import backgroundLowRes from "./assets/BackgroundLowRes.jpg";

const App = () => {
  const [bgImage, setBgImage] = useState(backgroundLowRes);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setBgImage(backgroundImage);
  }, []);

  return (
    <BrowserRouter>
      <AppWrapper $bgImage={bgImage}>
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
