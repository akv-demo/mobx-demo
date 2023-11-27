import React from 'react';
import MobxDemo from './mobx';
import Spinner from './spinner';

const App: React.FunctionComponent = (): React.ReactElement =>
  <React.StrictMode >
    <React.Suspense fallback={<Spinner />} >
      <div >
        <MobxDemo />
      </div >
    </React.Suspense >
  </React.StrictMode >;

export default App;
