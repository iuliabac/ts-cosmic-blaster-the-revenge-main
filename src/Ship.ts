import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Ship extends ScoreItem {
  public constructor(maxX: number, maxY: number) {
    super();

    this.image = CanvasRenderer.loadNewImage('./assets/ship.png');

    this.posX = maxX;
    this.posY = (Math.random() * maxY);
  }

  /**
   * Update speed of meteor
   * Update position of meteor
   *
   * @param elapsed the elapsed time from the Game
   */
  public update(elapsed: number): void {
    this.posX -= elapsed * 0.4;
    this.posY += Math.sin(this.posX / 100) * 8;
  }
}
