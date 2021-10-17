export const switchStartStopBtn = (stopBtn: HTMLElement, startBtn: HTMLElement): void => {
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', 'disabled');
};
