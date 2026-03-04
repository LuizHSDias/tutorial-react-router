import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./routes/Expenses/index.js";
import Invoices from "./routes/Invoices/index.js";
import NotFound from "./routes/NotFound/index.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route
          path="*" element={<NotFound />}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
