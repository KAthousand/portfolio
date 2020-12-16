import Layout from "../src/components/shared/Layout/Layout";
import Title from "../src/screens/Title/Title";
import About from "../src/screens/About/About";
import Work from "../src/screens/Work/Work";
import Contact from "../src/screens/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Layout>
      <Title />
      <About />
      <Work />
      <Contact />
    </Layout>
  );
}

export default App;
