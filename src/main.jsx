import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Invoices from "./pages/invoices/Invoices.jsx";
import Form from "./pages/form/Form.jsx";
import Calendar from "./pages/calendar/Calendar.jsx";
import Faq from "./pages/faq/Faq.jsx";
import BarChart from "./pages/barChart/BarChart.jsx";
import LineChart from "./pages/lineChart/LineChart.jsx";
import PieChart from "./pages/pieChart/PieChart.jsx";
import Geography from "./pages/geography/Geography.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/bar" element={<BarChart />} />
          <Route path="/line" element={<LineChart />} />
          <Route path="/pie" element={<PieChart />} />
          <Route path="/geography" element={<Geography />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
