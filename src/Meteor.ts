import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Meteor extends ScoreItem {
  private speed: number = 0;

  public constructor(maxX: number, maxY: number) {
    super();

    const randomSize: number = Math.random();
    if (randomSize > 0.4) {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_brown_big.png');
      this.speed = 0.04 + (Math.random() * 0.1);
      this.score = 5;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_grey_small.png');
      this.speed = 0.2 + (Math.random() * 0.1);
      this.score = 10;
    }

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
    this.speed *= (1.00002) ** elapsed;
    this.posX -= elapsed * (this.speed);
  }
}
