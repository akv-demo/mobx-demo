import React from 'react';
import TimerObject from '../../../mobx/timer';
import TimerObjectView from './TimerObjectView';

const timer = new TimerObject();
const MobxDemo: React.FunctionComponent = (): React.ReactElement => <div >
  <TimerObjectView timer={timer} />
</div>;

export default MobxDemo;
