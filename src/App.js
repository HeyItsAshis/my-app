import React, { createContext } from 'react';
import Home from './Components/Home';

export const WebContext = createContext();
export const SettingsContext = createContext();
function App() {
  const settings = { theme: 'primary', font: 'Roboto' };
  return (
    <WebContext.Provider value={'RohitGadget'}>
      <SettingsContext.Provider value={settings}>
        <Home/>
      </SettingsContext.Provider>
    </WebContext.Provider>
  );
}

export default App;
