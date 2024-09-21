// Listing 10.9 Rewriting the App.tsx file in the src folder.

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./Header";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
        </QueryClientProvider>
    );
}

export default App;