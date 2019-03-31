import { Component } from '@angular/core';
import { LedsService } from './services/leds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ness - JavaScript com Arduino Uno';

  led: String = 'off';
  statusLed: String = 'LIGAR';
  turn: Boolean = false;

  led2: String = 'off';
  statusLed2: String = 'LIGAR';
  turn2: Boolean = false;

  led3: String = 'off';
  statusLed3: String = 'LIGAR';
  turn3: Boolean = false;

  led4: String = 'off';
  statusLed4: String = 'LIGAR';
  turn4: Boolean = false;

  
  turnGeneric: Boolean = false;

  constructor(private ledsService: LedsService) {}

  mamangerLed(comodo) {

    switch (comodo) {
      case 1:
        this.turn = !this.turn;
        this.turnGeneric = !this.turn;
        this.led = this.turn ? 'on' : 'off';
        this.statusLed = this.turn ? 'DESLIGAR' : 'LIGAR';
        break;
      case 2:
        this.turn2 = !this.turn2;
        this.turnGeneric = !this.turn2;
        this.led2 = this.turn2 ? 'on' : 'off';
        this.statusLed2 = this.turn2 ? 'DESLIGAR' : 'LIGAR';
        break;
      case 3:
        this.turn3 = !this.turn3;
        this.turnGeneric = !this.turn3;
        this.led3 = this.turn3 ? 'on' : 'off';
        this.statusLed3 = this.turn3 ? 'DESLIGAR' : 'LIGAR';
        break;
      case 4:
        this.turn4 = !this.turn4;
        this.turnGeneric = !this.turn4;
        this.led4 = this.turn4 ? 'on' : 'off';
        this.statusLed4 = this.turn4 ? 'DESLIGAR' : 'LIGAR';
        break;
    }

      this.ledsService.get(comodo, this.turnGeneric).subscribe((result) => {

      });
  }
}
