import Layout from "./Layout";
import { ReactComponent as Home } from "./pages/home.md";
import { ReactComponent as Projects } from "./pages/projects.md";
import { ReactComponent as AboutMe } from "./pages/about-me.md";
import { ReactComponent as Contacts } from "./pages/contacts.md";
import { ReactComponent as Support } from "./pages/support.md";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./style.css";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/support" element={<Support />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
