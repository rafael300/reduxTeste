import './App.css';
import { Provider } from 'react-redux'
import { store, persistor } from './store/index'
import Pagetst from './components/pagetst'
import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Pagetst></Pagetst>
      </PersistGate>
    </Provider>
  );
}

export default App;
