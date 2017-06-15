import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit, OnDestroy {
  public numPlayers = 8;
  public myTime = 3.75*this.numPlayers;
  public beepCount = 5;
  private tick: number = this.myTime;
  public tempNum = this.myTime - Math.floor(this.myTime);
  private subscription: Subscription;
  private sound1 = new Audio('');
  private sound2 = new Audio('');
  private selected;

  constructor() {
    if(this.sound1.canPlayType('audio/mpeg')){
      this.sound1 = new Audio('/assets/beep_countdown.mp3');
    }
    if(this.sound2.canPlayType('audio/mpeg')){
      this.sound2 = new Audio('/assets/beep_spawn.mp3');
    }
  }

  ngOnInit() {
    let timer2 = TimerObservable.create(0,(this.tempNum*1000));
    this.subscription = timer2.subscribe(t => {
      this.decimalWork(t);
    });
    this.resetSettings();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkTime(t){
    // Actually changing the time.
    if(this.tick == 0){
      document.getElementById('background').classList.remove('flashing');
      this.subscription.unsubscribe();
      this.tick = this.myTime;
      let timer2 = TimerObservable.create(0,(this.tempNum*1000));
      this.subscription = timer2.subscribe(t => {
        this.decimalWork(t);
      });
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
      document.getElementById('background').classList.add('flashing');

    }
  }

  decimalWork(t){
    if(t > 0){
      this.tick = 1+(Math.floor(this.tick));
      this.subscription.unsubscribe();
      let timer = TimerObservable.create(0, 1000);
      this.subscription = timer.subscribe(t => {
        this.checkTime(t);
      });
    }
  }

  resetTime() {
    this.subscription.unsubscribe();
    this.tick = this.myTime;
    let timer2 = TimerObservable.create(0,(this.tempNum*1000));
    this.subscription = timer2.subscribe(t => {
      this.decimalWork(t);
    });
  }

  changePlayerCount(sentVal){
    this.numPlayers = sentVal;
    this.myTime = 3.75*this.numPlayers;
    this.tempNum = this.myTime - Math.floor(this.myTime);
  }

  changeBeepCount(sentVal){
    this.beepCount = sentVal;
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


  // opt6(){
  //   document.getElementById("opt6").setAttribute("checked", "true");
  //   document.getElementById("opt2").setAttribute("checked", "false");
  //   document.getElementById("opt3").setAttribute("checked", "false");
  //   document.getElementById("opt4").setAttribute("checked", "false");
  //   document.getElementById("opt5").setAttribute("checked", "false");
  //   document.getElementById('timer').className = "giant_text";
  // }
  // opt2(){
  //   document.getElementById("opt6").setAttribute("checked", "false");
  //   document.getElementById("opt2").setAttribute("checked", "true");
  //   document.getElementById("opt3").setAttribute("checked", "false");
  //   document.getElementById("opt4").setAttribute("checked", "false");
  //   document.getElementById("opt5").setAttribute("checked", "false");
  //   document.getElementById('timer').className = "giant_text";
  // }
  // opt3(){
  //   document.getElementById("opt6").setAttribute("checked", "false");
  //   document.getElementById("opt2").setAttribute("checked", "false");
  //   document.getElementById("opt3").setAttribute("checked", "true");
  //   document.getElementById("opt4").setAttribute("checked", "false");
  //   document.getElementById("opt5").setAttribute("checked", "false");
  //   document.getElementById('timer').className = "giant_text";
  // }
  // opt4(){
  //   document.getElementById("opt6").setAttribute("checked", "false");
  //   document.getElementById("opt2").setAttribute("checked", "false");
  //   document.getElementById("opt3").setAttribute("checked", "false");
  //   document.getElementById("opt4").setAttribute("checked", "true");
  //   document.getElementById("opt5").setAttribute("checked", "false");
  //   document.getElementById('timer').className = "tiny_text big_space";
  // }
  // opt5(){
  //   document.getElementById("opt6").setAttribute("checked", "false");
  //   document.getElementById("opt2").setAttribute("checked", "false");
  //   document.getElementById("opt3").setAttribute("checked", "false");
  //   document.getElementById("opt4").setAttribute("checked", "false");
  //   document.getElementById("opt5").setAttribute("checked", "true");
  //   document.getElementById('timer').className = "tiny_text big_space";
  // }

}
