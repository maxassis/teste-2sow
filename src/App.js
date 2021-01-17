import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import GlobalStyles from "./styles/global";
import Routes from "./routes";

function App() {
  const defaultQueryFn = async ({ queryKey }) => {
    const { data } = await axios.get(
      `http://localhost:5000/usuarios${queryKey}`
    );
    return data;
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
    },
  });

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
