import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, OnDestroy {
  private tick: number = 24;
  private myTime = 24;
  public beepCount = 5;
  private subscription: Subscription;
  private sound1 = new Audio('');
  private sound2 = new Audio('');
  public myVolume: number = 25;
  private selected;

  constructor() {
    if(this.sound1.canPlayType('audio/mpeg')){
      this.sound1 = new Audio('/assets/0_countdown.mp3');
    }
    if(this.sound2.canPlayType('audio/mpeg')){
      this.sound2 = new Audio('/assets/0_spawn.mp3');
    }
    this.sound1.volume = 0.25;
    this.sound2.volume = 0.25;
    this.myVolume = 25;
  }

  ngOnInit() {
    let timer = TimerObservable.create(0, 1000);
    this.subscription = timer.subscribe(t => {
      this.checkTime(t);
    });
    this.resetSettings();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkTime(t){
    // Actually changing the time.
    if(t % (this.myTime+1) === 0){
      this.tick = this.myTime;
      document.getElementById('background').classList.remove('flashing');
    } else {
      this.tick--;
    }


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

  resetTime() {
    this.subscription.unsubscribe();
    let timer = TimerObservable.create(0, 1000);
    this.subscription = timer.subscribe(t => {
      this.checkTime(t);
    });
  }

  changeBeepCount(sentVal){
    this.beepCount = sentVal;
  }

  changeVolume(sentVal){
    sentVal = parseInt(sentVal.toString());
    if(sentVal <= 100 && sentVal >= 0) {
      this.sound1.volume = sentVal/100;
      this.sound2.volume = sentVal/100;
    } else if(sentVal > 100) {
      this.sound1.volume = 1;
      this.sound1.volume = 1;
    } else if(sentVal < 0) {
      this.sound1.volume = 0;
      this.sound1.volume = 0;
    }
    this.myVolume = Math.round(this.sound1.volume*100);
  }

  changeSound(sentVal) {
    if(this.sound1.canPlayType('audio/mpeg')){
      this.sound1 = new Audio('/assets/'+sentVal+'_countdown.mp3');
    }
    if(this.sound2.canPlayType('audio/mpeg')){
      this.sound2 = new Audio('/assets/'+sentVal+'_spawn.mp3');
    }
    this.sound1.volume = (this.myVolume/100);
    this.sound2.volume = (this.myVolume/100);
  }

  changeSettings(sentVal){
    if(sentVal == "numbers"){
      if(document.getElementById("numbers").getAttribute("checked") == "true"){
        document.getElementById("numbers").setAttribute("checked", "false");
        document.getElementById('timer').className = "giant_text";
      } else {
        document.getElementById("numbers").setAttribute("checked", "true");
        document.getElementById('timer').className = "tiny_text big_space";
      }
    } else if(sentVal == "sounds"){
      if(document.getElementById("sounds").getAttribute("checked") == "true"){
        document.getElementById("sounds").setAttribute("checked", "false");
      } else {
        document.getElementById("sounds").setAttribute("checked", "true");
      }
    } else if(sentVal == "flashing"){
      if(document.getElementById("flashing").getAttribute("checked") == "true"){
        document.getElementById("flashing").setAttribute("checked", "false");
      } else {
        document.getElementById("flashing").setAttribute("checked", "true");
      }
    }
  }

  resetSettings(){
    document.getElementById("flashing").setAttribute("checked", "false");
    document.getElementById("sounds").setAttribute("checked", "false");
    document.getElementById("numbers").setAttribute("checked", "false");
  }

}
