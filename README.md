# Object Oriented Programming Case Study Exam

**In case of any discrepancy between the English and Dutch versions of the instructions, the English version shall be considered the definitive and authoritative source.**

# Cosmic Blaster: The Revenge
> Strap in, pilot! In Cosmic Blaster, you're humanity's last hope against the endless waves of meteors tearing through the galaxy.

Your ship is flying through space. The only aspect you have control over is shooting the meteors.

## Demonstration

You can play a demonstration at: [https://hz-hbo-ict.github.io/ts-cosmic-blaster-the-revenge/](https://hz-hbo-ict.github.io/ts-cosmic-blaster-the-revenge/)

## Technical Details

 - A conceptual class diagram is provided for you to start. Make good use of OOP principles when completing the implementation. This includes, composition, inheritance, and polymorphism.

 - Make use of good game design principles. [5]

 - You may not alter the provided `app.ts`, `Game.ts`, `CanvasRenderer.ts`, or `MouseListener.ts`.

 - The player (![](./assets/player.png)) is on the left side of the screen. [2]

 - The player moves along the y-axis, along with the mouse. [6] 

 - The player is able to shoot lasers (![](./assets/laser.png)) by pressing the LEFT MOUSE button. [2]
 
 - Lasers start from the player's position and move to the right of the screen at a constant speed of 2px per ms. [2]
 
 - Randomly between 0 and 1000ms (milliseconds) a new meteor will appear on the right side of the screen, at a random location. [2]

 - Meteors move to the left of the screen starting at a random speed (ranges defined below) and accelerating 0.002% every ms. [3]

 - There are 2 types of meteors.
    1. Big brown meteors ![](./assets/meteor_brown_big.png) [2]
       - worth 5 points
       - starting speed at a value between 0.04 and 0.14 px per ms 
    2. Little grey metors ![](./assets/meteor_grey_small.png) [2]
       - worth 10 points
       - starting speed at a value between 0.2 and 0.3 px per ms

 - Lasers can be used to shoot Meteors. 
   - When a meteor is shot the meteor disappears and the player earns points. [5]
   - A laser "shoots" a meteor when the images collide. [3]
   - Pseudocode for Collision Detection:

```
item.X + item.width >= player.X
&& item.X <= player.X + player.width
&& item.Y + item.height >= player.Y
&& item.Y <= player.Y + player.height
```

 - A meteor should be destroyed when it leaves the left side of the screen. [2]

 - A laser should be destroyed when it leaves the right side of the screen. [2]

 - The game is over when the player has earned 100 points. [2]

## Ally ships
Your allies are flying in the opposite direction and you must avoid them.

 - There is a 10% chance that an ally ship and 90% chance that a meteor is spawned. [5]
 
 - The ally ships ![](./assets/ship.png) start from the right side of the screen and move to the left. [1]

 - Ally ships move in a sinusoidal pattern. [1] The following equations are used: 
 
```
posX = posX - (0.4 * elapsed)
posY = posY + (Math.sin(posX / 100) * 8)
```

 - The ally ship can be destroyed if hit by a laser. [2]

 - The game is over when the player has hit 10 ally ships. [1]

### Conceptual Class Diagram
The following class diagram must be used as a minimum in your implementation. You might need to refactor further in order to make proper use of good Object Oriented Programming principles.

![](./docs/classdiagram.svg)

*if you deviate from this given diagram, you must maintain good Object Oriented Programming principles.*



## Credits
 - https://kenney.nl/assets/space-shooter-redux

