import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import SignupPage from "./Components/SignUpPage/SignUpPage";
import OnBoarding from "./Components/OnboardingScreen/OnBoardingMain";
import BoardBuilderPage from "./Components/Board/BoardBuilderPage";
import CreateBoard from "./Components/Board/CreateBoard";
import EditBoard from "./Components/Board/EditBoard";
import LayersPanel from "./Components/Board/ActionBar/Layers/Layers";
import ActionBar from "./Components/Board/ActionBar/ActionBar";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signuppage" element={<SignupPage />} /> */
        <Route path="/boardBuilder" element={<BoardBuilderPage />} />
        <Route
          path="/boardBuilder-BoardInfo-createPost"
          element={<CreateBoard />}
        />
        <Route path="/board-builder-edit-board" element={<EditBoard />} />
        <Route
          path="/board-builder-actionbar-layers"
          element={<LayersPanel />}
        />
        {/* <Route path="/actionbar" element={<ActionBar />} /> */}
        {/* <Route path="/" element={<BoardScreen />} /> */}
        {/* <Route path="/" element={<Blank />} /> 
       
        <Route path="/search" element={<Searchbar />} />
   
        <Route path="/actionbar" element={<ActionBar />} />
        <Route path="/boardeditor" element={<BoardEditor />} />
       
        <Route path="/wallet" element={<WalletComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
