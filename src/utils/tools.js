// get y position of a sine wave based on x
const getSineY = (x, offset) => {
  let amplitude = 20;
  let frequency = 15;
  let height = 100;
  return height/2 + amplitude * Math.sin((x + offset)/frequency);
}

export { getSineY };