// Listing 8.24 Using React context in the src/App.tsx file.

import { Header } from "./Header";
import { Main } from "./Main";
import { AppProvider } from "./AppContext";

function App() {

    return (
        <div className="max-w-7xl mx-auto px-4">
            <AppProvider>
                <Header />
                <Main />
            </AppProvider>
        </div>
    );
}

export default App;
