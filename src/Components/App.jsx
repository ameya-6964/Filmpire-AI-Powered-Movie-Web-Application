import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import MovieInformation from './MovieInformation/MovieInformation';
import Movies from './Movies/Movies';
import Profile from './Profile/Profile';
import Actors from './Actors/Actors';
// import useStyles from './styles';

const App = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/movie/:id">
          <MovieInformation />
        </Route>
        <Route exact path="/actors/:id">
          <Actors />
        </Route>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
);
export default App;
