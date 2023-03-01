import ContactPage from "pages/Create";
import HomePage from "pages/Home";
import { Route, Routes } from "react-router-dom";
import { PATH } from "shared/constant/path";

function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<HomePage />} />
      <Route path={PATH.CREATE} element={<ContactPage />} />
    </Routes>
  );
}

export default App;
