import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import GlobalStyles from "./styles/global";
//import { Switch, Route, BrowserRouter } from "react-router-dom";
//import Login from "./pages/login";
//import List from "./pages/List";
//import Register from "./pages/Register";
import Routes from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App;
