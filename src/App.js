import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//import Login from "./pages/login";
import GlobalStyles from "./styles/global";
//import Fetch from "./components/fetchData/index";
//import Header from "./components/header/index";
//import List from "./pages/List/index";
//import Table from "./components/table/index";
import Register from "./pages/Register/index";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <Register />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App;
