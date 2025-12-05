import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import NavBottom from "./components/NavBottom";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Nav />
      <NavBottom/>
      <ProductList />
      <Footer/>
    </div>
  );
};

export default App;
