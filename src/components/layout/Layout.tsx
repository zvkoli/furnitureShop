import Navbar from "../module/Navbar";
import { LayoutProps } from "@/types/LayoutProps";
import { Provider } from "react-redux";
import store  from "@/redux_toolkit/store";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </div>
   </Provider>
  );
};

export default Layout;