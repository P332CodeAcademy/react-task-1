import './App.css';
import WelcomeMessage from './WelcomeMessage';

function App() {
  const user = { Name: "Shair", Surname: "Bayramov" }
  return (
    <div className="App">
      <WelcomeMessage user={user} />
    </div>
  );
}

export default App;
