import CanvasRenderer from './CanvasRenderer.js';

export default abstract class CanvasItem {
  protected posX: number;

  protected posY: number;

  protected image: HTMLImageElement;

  public constructor() {
    this.posX = 0;
    this.posY = 0;
    this.image = new Image();
  }

  /**
   * Render the current game item to the screen
   *
   * @param canvas canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }

  public abstract update(elapsed: number): void;

  public getPosY(): number {
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }
}
