import * as React from 'react';
import * as Redux from 'react-redux';
import { History } from 'history';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes';
import Window from './Window';

interface IRootType {
  store: Redux.Store<any>;
  history: History
};

export default function Root({ store, history }: IRootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Window>
          <Routes />
        </Window>
      </ConnectedRouter>
    </Provider>
  );
}
