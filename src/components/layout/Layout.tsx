import Navbar from "../module/Navbar";
import { ILayout } from "@/types/props/ILayout";
import { Provider } from "react-redux";
import store  from "@/redux_toolkit/store";

const Layout: React.FC<ILayout> = ({ children }) => {
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