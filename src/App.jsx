import "./App.css";
import major from "./data/data";

import Card from "./components/Card/Card.jsx";

function App() {
  return (
    <div className="container">
      <h1 className="title">CS:GO Major Winners</h1>

      <div className="main">
        {major.map((e) => (
          <Card
            key={e.id}
            name={e.name}
            winner={e.winner}
            logo={e.logo}
            players={e.players}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
