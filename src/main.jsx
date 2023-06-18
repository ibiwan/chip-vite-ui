import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import React from 'react'


import { House, Houses } from 'component/House';
import { Player, Players } from 'component/Player';
import { fetchPlayers } from 'state/player';
import { fetchHouses } from 'state/house';

import App from './App'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'houses',
        element: <Houses />,
        loader: () => {
          fetchHouses();
          fetchPlayers();
          return true;
        }
      },
      { path: 'houses/:houseId', element: <House /> },
      {
        path: 'players',
        element: <Players />,
        loader: fetchPlayers,
      },
      { path: 'players/:playerId', element: <Player /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
