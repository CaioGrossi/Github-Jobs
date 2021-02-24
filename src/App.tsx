import Routes from './routes';
import GlobalStyles from './styles/global';
import JobsProvider from './context/JobsContext';

function App() {
  return (
    <JobsProvider>
      <Routes />
      <GlobalStyles />
    </JobsProvider>
  );
}

export default App;
