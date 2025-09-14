import Layout from "./Layout";
// Importing the markdown files to react components
import { ReactComponent as AboutMe } from "./pages/about-me.md";
import { ReactComponent as Contacts } from "./pages/contacts.md";
import { ReactComponent as Home } from "./pages/home.md";
import { ReactComponent as Projects } from "./pages/projects.md";
import { ReactComponent as WorthToMention } from "./pages/worth-to-mention.md";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "normalize.css";
import "./style.css";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/worth-to-mention" element={<WorthToMention />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
