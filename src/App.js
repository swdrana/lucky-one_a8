import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import FAQ from './components/FAQ/FAQ';

function App() {
  // This is our root Component
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <FAQ></FAQ>
    </div>
  );
}

export default App;
