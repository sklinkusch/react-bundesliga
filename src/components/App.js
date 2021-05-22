import '../styles/App.css';
import Matches from "./Matches"
import Table from "./Table"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Matches />
        <Table />
      </header>
    </div>
  );
}

export default App;
