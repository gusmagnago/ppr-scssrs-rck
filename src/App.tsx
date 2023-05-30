import Header from './components/header/Header';
import { AppProvider } from './context/appContext';
import { PlayButton } from './components/play-button/PlayButton';
import { Game } from './components/game/Game';
import styled from 'styled-components';
import { palette } from './theme/palette';

const bgOpacity = 'b5';

const gradient = `linear-gradient(0deg, ${palette.black} 0%, ${
  palette.black + bgOpacity
} 100%)`;

const GameWrapper = styled.div`
  height: 100vh;
  background: ${gradient};
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppProvider>
      <Header />
      <GameWrapper>
        <Game />
        <PlayButton />
      </GameWrapper>
    </AppProvider>
  );
}

export default App;
