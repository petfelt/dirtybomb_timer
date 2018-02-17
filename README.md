# dirtybomb_timer

A simple timer web app built for a video game known as Dirty Bomb. Used the MEAN stack for development. It includes a constantly rotating "respawn timer" for both gamemodes in the game. Each timer is customizable to include flashing color as the timer gets close to zero and selectable countdown sounds.

### [Live Link.](https://db-timer.herokuapp.com/)

![Image Of DB Timer](https://github.com/petfelt/dirtybomb_timer/blob/master/media/preview1.png)

## But Why?

The game itself does not give you warning for respawning besides a small countdown timer in the corner of your screen.
If you don't respawn before the timer expires, you could get "long spawned," meaning you don't get to respawn for up to 24 seconds. In a fast game like Dirty Bomb, this time is crucial. So you need to know when your next spawn time is before you make decisions in game. I figured having a visual "flashing" and/or an audio cue would be helpful in order to stay on top of this game mechanic. So I built a website to give players a reminder of their respawn timers.


## Code Snippet

Changing the time and applying changes based on user selection every tick/second:
```javascript
checkTime(t){
  // Actually changing the time.
  if(this.tick <= 0){
    this.tick = this.myTime;
    document.getElementById('background').classList.remove('flashing');
  } else{
    this.tick--;
  }
  this.pauseTime = t % (this.tick+1);


  // Check for user selections for sounds/flashing & play sounds/flash.
  if((this.tick <= this.beepCount && this.tick > 0)){
    if(document.getElementById('flashing').getAttribute("checked") == "false"){
      document.getElementById('background').classList.toggle('flashing');
    }
    if(document.getElementById('sounds').getAttribute("checked") == "false"){
      this.sound1.play();
    }
  } else {
    document.getElementById('background').classList.remove('flashing');
  }
  if(this.tick == 0 && (document.getElementById('sounds').getAttribute("checked") == "false")){
    this.sound2.play();
    if(document.getElementById('flashing').getAttribute("checked") == "false"){
      document.getElementById('background').classList.add('flashing');
    }
  }
}
```

## Built With

* [MEAN](http://mean.io/) - Stack used. Comprised of [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [Angular 4](https://angular.io/), & [NodeJS](https://nodejs.org/en/).
* [Angular-CLI](https://cli.angular.io/) - Template construction.

## Author

* **Peter Amin Felton** - *Project Development* - [petfelt](https://github.com/petfelt).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

* My Father - For consistent encouragement.
* The [Dirty Bomb](https://www.dirtybomb.com/) Development Team - For creating a NOT pay-to-win F2P FPS, filled to the brim with objective, skill, & team-based gameplay.
