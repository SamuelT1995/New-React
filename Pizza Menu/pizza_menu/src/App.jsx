import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import "./index.css";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
