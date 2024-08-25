// Listing 6.19 Adding a Nested Route for <ProductPage /> in the src/Routes.tsx file

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "products",
                element: <ProductsPage />,
            },
            {
                path: "products/:id",
                element: <ProductPage />
            }
        ]
    },
]);

export function Routes() {
    return <RouterProvider router={router} />
}