import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Laser extends ScoreItem {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;

    this.image = CanvasRenderer.loadNewImage('./assets/laser.png');
  }

  /**
   * Update position of bullet
   *
   * @param elapsed the elapsed time from the Game
   */
  public update(elapsed: number): void {
    this.posX += elapsed * 2.0;
  }
}
