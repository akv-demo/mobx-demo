/* eslint-disable no-magic-numbers,no-unused-expressions */
import {expect} from 'chai';
import TimerObject from '../../src/mobx/timer';
import sinon from 'sinon';
import {Lambda, observe} from 'mobx';

describe('TimerObject test', () => {
  it('TimerObject is properly initialized', () => {
    // Arrange
    const timer = new TimerObject();
    // Act
    // Assert
    expect(timer).to.be.instanceOf(TimerObject);
  });

  describe('isActive is properly set', () => {
    it('isActive is false when timer is not started', () => {
      // Arrange
      const timer = new TimerObject();
      // Act
      // Assert
      expect(timer.isActive).to.be.false;
    });
    it('isActive is true when timer is started', () => {
      // Arrange
      const timer = new TimerObject();
      // Act
      timer.startTimer();
      // Assert
      expect(timer.isActive).to.be.true;
    });
    it('isActive is false when timer is paused', () => {
      // Arrange
      const timer = new TimerObject();
      // Act
      timer.startTimer();
      timer.pauseTimer();
      // Assert
      expect(timer.isActive).to.be.false;
    });
  });
  describe('isActive is observable property', () => {
    const disposes: Array<Lambda> = [];

    afterEach(() => {
      disposes.forEach((dispose) => dispose());
    });

    it('isActive is changed on action start/stop', () => {
      // Arrange
      const timer = new TimerObject();
      const stub = sinon.stub();
      disposes.push(
        observe(timer, 'isActive', stub));
      // Act
      timer.startTimer();
      timer.pauseTimer();
      // Assert
      expect(stub.calledTwice).to.be.true;
      expect(stub.firstCall.args[0].newValue).to.be.true;
      expect(stub.secondCall.args[0].newValue).to.be.false;
    });
  });
});
