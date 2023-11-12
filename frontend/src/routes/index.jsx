import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Graphs from "./GraphsOriginal";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>Page not found</>} />
          <Route path="/women++" element={<Graphs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
