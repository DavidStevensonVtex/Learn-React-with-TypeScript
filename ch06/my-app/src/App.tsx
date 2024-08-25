// Listing 6-16. Using nested routes in the App using the React Router <Outlet /> component.

import { Outlet } from "react-router-dom";
import { Header } from "./Header";

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App;
