// Listing 6.8 Creating the ProductPages.tsx component in the src/pages folder.

import { products } from "../data/products";

export function ProductPages() {
    return (
        <div className="text-center p-5">
            <h2 className="text-xl font-bold text-slate-600">
                Here are some great tools for React
            </h2>
        </div>
    )
}