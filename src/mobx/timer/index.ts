import {action, computed, makeObservable, observable} from 'mobx';

const INTERVAL_1S = 1000;

type NodeTimer = ReturnType<typeof setInterval>;
class TimerObject {

  private _nodeTimeout?: NodeTimer = null;
  private _counter = 0;

  constructor() {
    makeObservable(this, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      _nodeTimeout: observable,
      _counter: observable,
      isActive: computed,
      counter: computed,
      startTimer: action,
      pauseTimer: action,
      resetTimer: action,
    });
  }

  public startTimer() {
    this._nodeTimeout = setInterval(() => {
      this._counter += 1;
    }, INTERVAL_1S);
  }

  public pauseTimer() {
    if (this._nodeTimeout) {
      clearInterval(this._nodeTimeout);
      this._nodeTimeout = null;
    }
  }

  public resetTimer() {
    this.pauseTimer();
    this._counter = 0;
  }

  public get isActive() {
    return this._nodeTimeout !== null;
  }

  public get counter() {
    return this._counter;
  }
}

export default TimerObject;
