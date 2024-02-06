import Navbar from "../module/Navbar";
import { ILayout } from "@/types/props/ILayout";
import { Provider } from "react-redux";
import store  from "@/redux_toolkit/store";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </div>
      </QueryClientProvider>
   </Provider>
  );
};

export default Layout;