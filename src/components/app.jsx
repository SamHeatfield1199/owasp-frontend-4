import { useState } from 'react';

import SignIn from './pages/sign-in';
import Flag from './pages/flag';
import Alert from './utils/alert';
import { Route, Router, Switch } from 'react-router';
import Credentials from './pages/credentials';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './pages/page404';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [alerts, setAlerts] = useState([]);

  return (
    <BrowserRouter>
      <div className="container">

        <Switch>

        {!accessToken ? 
          <Route path="/" render={() => <SignIn setAccessToken={setAccessToken} setAlerts={setAlerts} />} /> :
          <Route path="/:username" render={() => <Credentials setAlerts={setAlerts} />} />
        }

        <Route path="/404" render={() => <NotFound />} />


        </Switch>

      </div>
    </BrowserRouter>
  );
};

export default App;
