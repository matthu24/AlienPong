# Alien Pong

## Background and Overview 

Alien Pong is a twist on the two classic games pong and space invaders.  Users will control a ship that will protect the bottom horizontal line (x axis) that it sits on.  The ship will move to deflect the bouncing projectile from going past the x axis, all the while shooting missiles upwards to destroy the alien invaders that slowly approach from above.  If the projectile or 3 alien invaders cross the x axis, the game is lost.  Speed of the projectile and quantity of invaders increases as the game progresses.  The user wins if a certain number of invaders are destroyed.  

## Functionality and MVP

* Single player pong
* Alien invaders falling from sky and ability to shoot them 
* Styling, CSS, and animeJS
* Increase difficulty as game progresses (speed up ball, increase invaders)
* Bonus: back end for high scores (measured either by number of invaders destroyed or time survived)


## WireFrames

<img src = "https://s3-us-west-1.amazonaws.com/fullstackfiles/JSWireframe.png"/>




## Architecture and Technologies 

* Vanilla JS for game logic and flow 
* HTML5 Canvas for game rendering and DOM manipulation 
* Anime JS for explosion visuals and other movements 

File structure: 
* index.html
* draw.js - main draw function and setInterval invocation
* helper.js - all helper functions and constants
* animate.js - use Anime.JS library to assist with visuals

## Implementation Timeline 

Weekend

* Research
* Implement single player version of pong 

Day 1

* Set up file structure and web pack
* Give the user ability to fire missiles
* Establish method for collision detection between missiles and alien invaders 

Day 2

* Make invaders appear randomly from above the canvas
* Learn enough AnimeJS to help with: 
1. Alien explosion (use anime.js fireworks)
2. Projectile and alien movement 


Day 3

* Continue to style game and work with AnimeJS
* Increase difficulty as game progresses
    -Figure out how to gradually increase ball speed as well as increase number of aliens falling from sky 

Day 4

* Polish the game and work out kinks
* Catchup/backend
