import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';

export default class Player extends CanvasItem {
  private maxY: number;

  public constructor(maxY: number) {
    super();
    this.posX = 50;
    this.posY = maxY / 2;

    this.image = CanvasRenderer.loadNewImage('assets/player.png');

    this.maxY = maxY;
  }

  public move(posY: number): void {
    this.posY = posY;

    if (this.posY < 0) {
      this.posY = 0;
    }

    if (this.posY + this.image.height > this.maxY) {
      this.posY = this.maxY - this.image.height;
    }
  }


  public update(delta: number): void {

  }

    public collidesWithItem(item: CanvasItem): boolean {
    return (
      item.getPosX() + item.getWidth() >= this.posX
      && item.getPosX() <= this.posX + this.image.width
      && item.getPosY() + item.getHeight() >= this.posY
      && item.getPosY() <= this.posY + this.image.height
    );
  }
}
