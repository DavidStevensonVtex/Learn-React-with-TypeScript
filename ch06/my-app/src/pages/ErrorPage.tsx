// Listing 6-21. Creating an ErrorPage component in the src/pages/ErrorPage.tsx file

import { Header } from "../Header";

export function ErrorPage() {
    return (
        <>
            <Header />
            <div className="text-center p-5 text-xl">
                <h1 className="text-xl text-slate-900">
                    Sorry, an error has occurred.
                </h1>
            </div>
        </>
    );
}