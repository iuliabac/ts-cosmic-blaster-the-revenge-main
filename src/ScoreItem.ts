import CanvasItem from './CanvasItem.js';

export default abstract class ScoreItem extends CanvasItem {
  protected score: number;

  public constructor() {
    super();

    this.score = 0;
  }

  public getScore(): number {
    return this.score;
  }

  public isColliding(item: ScoreItem): boolean {
    return (
      item.getPosX() + item.getWidth() > this.posX
    && item.getPosY() + item.getHeight() > this.posY
    && item.getPosY() < this.posY + this.getHeight()
    );
  }
}
