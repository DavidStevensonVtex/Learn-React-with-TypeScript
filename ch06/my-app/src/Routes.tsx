// Listing 6.10 Creating Routes.tsx in the src folder

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";

const router = createBrowserRouter([
    {
        path: "products",
        element: <ProductsPage />,
    }
]);

export function Routes() {
    return <RouterProvider router={router} />
}