import CountContextProvider from './CounterProvider';
import './App.css';
import Component1 from './component1';

function App() {
  return (
    <CountContextProvider>
      <Component1 />
    </CountContextProvider>
  );
}

export default App;
