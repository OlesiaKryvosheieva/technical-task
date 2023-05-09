import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Tweets from "pages/Tweets/Tweets";
import Home from "pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}

export default App;
