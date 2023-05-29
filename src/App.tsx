import Header from './components/header/Header';
import { AppProvider } from './context/appContext';
import { PlayButton } from './components/play-button/PlayButton';
import { Game } from './components/game/Game';

function App() {
  return (
    <AppProvider>
      <Header />
      <Game />
      <PlayButton />
    </AppProvider>
  );
}

export default App;
