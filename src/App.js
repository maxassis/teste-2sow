import { QueryClient, QueryClientProvider } from "react-query";
//import { ReactQueryDevtools } from "react-query/devtools";
import Login from "./pages/login";
import GlobalStyles from "./styles/global";
//import Fetch from "./components/fetchData/index";
//import Header from "./components/header/index";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyles />
      {/* <Login /> */}
      <QueryClientProvider client={queryClient}>
        <Login />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
