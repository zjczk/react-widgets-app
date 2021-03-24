import { BrowserRouter } from 'react-router-dom';

import Page from './containers/Page/Page'
import { WidgetProvider } from './WidgetContext';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <WidgetProvider>
        <div className="App">
          <Page />
        </div>
        </WidgetProvider>
    </BrowserRouter>
  );
}

export default App;
