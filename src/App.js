import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyles from "./styles/global";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import List from "./pages/List";
import Register from "./pages/Register";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true}>
              <Login />
            </Route>

            <Route path="/listagem" exact={true}>
              <List />
            </Route>

            <Route path="/register" exact={true}>
              <Register />
            </Route>
          </Switch>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App;
