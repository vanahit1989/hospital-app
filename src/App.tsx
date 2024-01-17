import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes";
import './App.css'
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
