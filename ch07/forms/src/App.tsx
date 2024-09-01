// Listing 7-10 Using React Router Form in src/App.tsx.

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { ContactPage, contactPageAction } from "./ContactPage";
import { ThankYouPage } from "./ThankYouPage";

function App() {
    return <ContactPage />;
}

export default App;
