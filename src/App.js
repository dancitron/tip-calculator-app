import React from 'react';
import Desktop from './components/Desktop.js';
import Mobile from './components/Mobile.js';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

const App = () => {
  
return (
    <div>
      <BrowserView>

      <Desktop/>
      </BrowserView>
      
      <MobileView>
        <Mobile/>
      </MobileView>
    </div>
   );
  }
export default App;
