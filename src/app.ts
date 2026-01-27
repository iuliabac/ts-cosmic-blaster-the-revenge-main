import CosmicBlaster from './CosmicBlaster.js';

const game: CosmicBlaster = new CosmicBlaster(document.getElementById('game') as HTMLCanvasElement);

window.addEventListener('load', () => {
  game.start();
});
