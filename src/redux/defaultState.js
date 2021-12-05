const defaultGame = {
  sandboxMode: false,
  message: 'Message from Redux State',
  mode: "NO_MODE",
  isDebugActive: false,
  isStoreActive: false,
  isToolTipActive: true,
  grassLoaded: {
      clientHeight: 0,
      clientWidth: 0,
  },
  resources: {
      acorns: 10,
      water: 0,
      wood: 0,
      stars: 0,
      stone: 0
  },
  milestones: {
      water: false,
      stars: false,
      wood: false,
      tractor: false,
      seasons: false,
      speed: false,
      stone: true,
  },
  mouse: {    
      x: 0,
      y: 0,
      xMax: 0,
      yMax: 0
  }
};

export { defaultGame };