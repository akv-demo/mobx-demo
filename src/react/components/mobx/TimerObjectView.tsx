import React from 'react';
import TimerObject from '../../../mobx/timer';
import {observer} from 'mobx-react-lite';

const TimerObjectView: React.FunctionComponent<{ readonly timer: TimerObject }> = observer(({timer}): React.ReactElement => <div>
  {`Seconds passed: ${timer.counter}`}

  <button onClick={() => timer.resetTimer()} type="button">
    Reset
  </button>

  <button onClick={() => timer.startTimer()} type="button">
    Start
  </button>

  <button onClick={() => timer.pauseTimer()} type="button">
    Stop
  </button>

</div>);


export default TimerObjectView;
