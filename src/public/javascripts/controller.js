var buttonLookup = {
  12: "up",
  13: "down",
  14: "left",
  15: "right",
};

const buttonPushed = {
  listeners: [],
  addListener(cb) {
    this.listeners.push(cb);
  },
  signal(state) {
    for (const cb of this.listeners) {
      cb(state);
    }
  }
}

const event = new Event('buttonPushed');

var buttonstate = false;
var buttonsPushed = [];

const loop = () => {
  const gamepads = navigator.getGamepads();
  const gamepad = gamepads[0];

  if (gamepad) {
    const statenow = gamepad.buttons.some(btn => btn.pressed);
    if (buttonstate !== statenow) {

      gamepad.buttons.map(e => e.pressed).forEach((isPressed, buttonIndex) => {
        if (isPressed)
        {
          if(buttonIndex in buttonLookup) {
            buttonsPushed.push(buttonLookup[buttonIndex]);
            dpad_event.dispatchEvent(new Event('dpad_event'));
          } 
  
          button_event.dispatchEvent(new Event('button_event'));
        }
      })

      buttonstate = statenow;
      buttonPushed.signal(statenow);
    }
  }

  setTimeout(loop, 10);
}

loop();
