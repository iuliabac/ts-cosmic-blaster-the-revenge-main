# Examen Object Oriented Programming (OOP)

**In geval van tegenstrijdigheid tussen de Engelse en Nederlandse versie van de instructies, geldt de Engelse versie als de definitieve en gezaghebbende bron.**

# Cosmic Blaster: The Revenge
> Zet je schrap, piloot! In Cosmic Blaster ben jij de laatste hoop van de mensheid tegen de eindeloze golven meteoren die door het sterrenstelsel scheuren.

Je schip vliegt door de ruimte. Het enige waar je controle over hebt is het afschieten van de meteoren.

## Voorbeeld demo

Je kunt een demonstratie spelen op: [https://hz-hbo-ict.github.io/ts-cosmic-blaster-the-revenge/](https://hz-hbo-ict.github.io/ts-cosmic-blaster-the-revenge/)

## Technische Vereisten

 - Je krijgt een conceptueel klassendiagram om mee te beginnen. Maak goed gebruik van OOP-principes bij het voltooien van de implementatie. Dit omvat composition, inheritance, en polymorphism.

 - Maak gebruik van goede spelontwerpprincipes. [5]

 - Je mag de meegeleverde `app.ts`, `Game.ts`, `CanvasRenderer.ts`, of `MouseListener.ts` niet wijzigen.

 - De speler (![](./assets/player.png)) staat aan de linkerkant van het scherm. [2]

 - De speler beweegt langs de y-as, samen met de muis. [6] 

 - De speler kan lasers afschieten (![](./assets/laser.png)) door op de LEFT MOUSE BUTTON knop te drukken. [2]
 
 - Lasers starten vanaf de positie van de speler en bewegen naar de rechterkant van het scherm met een constante snelheid van 2px per ms. [2]
 
 - Willekeurig tussen 0 en 1000 ms (milliseconden) verschijnt er een nieuwe meteoor aan de rechterkant van het scherm, op een willekeurige locatie. [2]

 - Meteoren bewegen naar de linkerkant van het scherm, beginnen met een willekeurige snelheid (hieronder gedefinieerd) en versnellen elke ms met 0,02%. [3]

 - Er zijn 2 soorten meteoren.
    1. Grote bruine meteoren ![](./assets/meteor_brown_big.png) [2]
       - 5 punten waard
       - startsnelheid op een waarde tussen 0,04 en 0,14 px per ms 
    2. Kleine grijze meteoren ![](./assets/meteor_grey_small.png) [2]
       - 10 punten waard
       - startsnelheid op een waarde tussen 0,2 en 0,3 px per ms 

 - Lasers kunnen worden gebruikt om meteoren af te schieten. 
   - Als een meteoor wordt afgeschoten, verdwijnt de meteoor en verdient de speler punten. [5]
   - Een laser heeft een meteoor "neergeschoten" als de afbeeldingen botsen. [3]
   - Pseudocode voor botsingsdetectie:

```
item.X + item.width >= player.X
&& item.X <= player.X + player.width
&& item.Y + item.height >= player.Y
&& item.Y <= player.Y + player.height
```

 - Een meteoor moet worden verwijderd als hij de linkerkant van het scherm verlaat. [2]

 - Een laser moet worden verwijderd als hij de rechterkant van het scherm verlaat. [2]

 - Het spel is afgelopen als de speler 100 punten heeft verdiend. [2]

## Bondsgenoten
Je bondgenoten vliegen in de tegenovergestelde richting en je moet ze ontwijken.

 - Er is 10% kans dat een bondgenootschip en 90% kans dat een meteoor wordt gespawned. [5]
 
 - De bondgenootschepen ![](./assets/ship.png) beginnen aan de rechterkant van het scherm en bewegen naar links. [1]

 - Bondgenootschepen bewegen in een sinusoïdaal patroon. [1] De volgende vergelijkingen worden gebruikt: 
 
```
posX = posX - (0.4 * elapsed)
posY = posY + (Math.sin(posX / 100) * 8)
```

 - Het bondgenootschip wordt vernietigd als het wordt geraakt door een laser. [2].

 - Het spel is afgelopen als de speler 10 bondgenootschepen heeft geraakt. [1]

 ### Conceptueel Klassendiagram
 Het volgende klassendiagram moet minimaal worden gebruikt in je implementatie. Het kan nodig zijn om verder te refactoren om goed gebruik te maken van de principes van object georiënteerd programmeren (OOP).

![](./docs/classdiagram.svg)

*als je afwijkt van dit gegeven diagram, moet je goede objectgeoriënteerde programmeer (OOP) principes aanhouden.*



## Credits
 - https://kenney.nl/assets/space-shooter-redux
