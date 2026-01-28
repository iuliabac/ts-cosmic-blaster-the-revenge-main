import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import MouseListener from './MouseListener.js';
import Player from './Player.js';
import Meteor from './Meteor.js';
import Ship from './Ship.js';
import ScoreItem from './ScoreItem.js';
import Laser from './Laser.js';

export default class CosmicBlaster extends Game {
  private canvas: HTMLCanvasElement;

  private scoreItems: ScoreItem[] = [];

  private lasers: Laser[] = [];

  private player: Player;

  private mouseListener: MouseListener;

  private alliesShot: number;

  private timeElapsed: number;

  private timeToNext: number;

  private score: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.mouseListener = new MouseListener(this.canvas, true);
    this.canvas.style.cursor = 'none';

    this.player = new Player(this.canvas.height);

    this.timeToNext = Math.random() * 500;

    this.score = 0;

    this.alliesShot = 0;

    this.timeElapsed = 0;
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    this.player.move(this.mouseListener.getMousePosition().y);

    if (this.mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.lasers.push(new Laser(this.player.getPosX() + this.player.getWidth(), this.player.getPosY() + this.player.getHeight() / 2));
    }
  }


  private makeItem(delta: number): void {
    this.timeToNext -= delta;

    if (this.timeToNext < 0) {
      const random: number = Math.random();

      if (random > 0.1) {
        this.scoreItems.push(new Meteor(this.canvas.width, this.canvas.height));
      } else {
        this.scoreItems.push(new Ship(this.canvas.width, this.canvas.height));
      }

      this.timeToNext = Math.random() * 500;
    }
  }



  /**
   * Update game state. Called from the GameLoop
   *
   * @param delta time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(delta: number): boolean {
    this.makeItem(delta);

    this.timeElapsed += delta;

    for (const item of this.scoreItems) {
      item.update(delta);
    }

    for (const laser of this.lasers) {
      laser.update(delta);
    }

    for (let i: number = this.scoreItems.length - 1; i >= 0; i--) {
      const item: ScoreItem = this.scoreItems[i];

      if (item.getPosX() + item.getWidth() < 0) {
        this.scoreItems.splice(i, 1);
      }
    }

    for (let i: number = this.lasers.length - 1; i >= 0; i--) {
      const laser: Laser = this.lasers[i];

      if (laser.getPosX() + laser.getWidth() > this.canvas.width) {
        this.lasers.splice(i, 1);
      }
    }

    for (let i: number = this.scoreItems.length - 1; i >= 0; i--) {
      for (let j: number = this.lasers.length - 1; j >= 0; j--) {
        const item: ScoreItem = this.scoreItems[i];
        const laser: Laser = this.lasers[j];

        if (item.isColliding(laser)) {
          if (item instanceof Ship) {
            this.alliesShot += 1;
          }
          this.score += item.getScore();
          this.scoreItems.splice(i, 1);
          this.lasers.splice(j, 1);
        }
      }
    }

    // Loop through all the items and check if they collide with the player
    // Remove all items that are out of the screen
    this.scoreItems = this.scoreItems.filter((item: ScoreItem) => {
      return (item.getPosX() > 0);
    });

    // Return true if the game should continue
    return !this.gameOver();
  }

  /**
   * Tests conditions whether game is over. If time left is less than 0
   *
   * @returns True if game is over
   */
  private gameOver(): boolean {
    return (this.alliesShot >= 10 || this.score > 100);
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);

    // Render the player and all the items
    this.scoreItems.forEach((item: ScoreItem) => item.render(this.canvas));
    this.lasers.forEach((item: ScoreItem) => item.render(this.canvas));
    this.player.render(this.canvas);

    // Render the score and time left
    if (this.gameOver()) {
      CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'white');
    }

    CanvasRenderer.writeText(this.canvas, `Score: ${this.score}`, 10, 45, 'left', 'Arial', 32, 'white');
    CanvasRenderer.writeText(this.canvas, `Allies Shot: ${this.alliesShot}`, 10, 85, 'left', 'Arial', 32, 'white');
  }
}
