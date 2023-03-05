import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { UserDataProvider } from "./contexts/userData";
import { router } from "./routes/router";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
        <RouterProvider router={router} />
      </UserDataProvider>
    </QueryClientProvider>
  );
}

export default App;
