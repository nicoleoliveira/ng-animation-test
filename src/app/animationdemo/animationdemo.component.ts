import { Component } from '@angular/core';

import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  animations: [
    trigger('colapsarMenu', [
      state('initial', style({
        width: '64px',
        backgroundColor: '#698eac',
        height: '100vh'
      })),
      state('final', style({
        backgroundColor: '#698eac',
        width: '256px',
        height: '100vh'
      })),
      transition('initial=>final', animate('150ms ease-in-out')),
      transition('final=>initial', animate('100ms ease-in-out'))
    ]),
    trigger('moverLabel', [
      state('initial', style({
        backgroundColor: 'green',
        maxWidth: '85%',
        marginLeft: '32px'
      })),
      state('final', style({
        backgroundColor: 'red',
        marginLeft: '32px',
        fontSize: '10px',
        maxWidth: '24%',
        transform: 'translate(-23px, 17px)'
      })),
      transition('final=>initial', animate('150ms')),
      transition('initial=>final', animate('100ms'))
    ]),
    // esta animação seria a animação para abrir e fechar os itens do menu
    // trigger('toggleItem', [
    //   transition('* => void', [
    //     style({ height: '*'}),
    //     animate('70ms', style({ height: 0 }))
    //   ]),
    //   transition('void => *', [
    //     style({ height: '0'}),
    //     animate('110ms', style({ height: '*' }))
    //   ])
    // ]),
  ]
})
export class AnimationdemoComponent {

  currentState = 'initial';
  currentStateItem = 'initial';

  listItem = [];
  listOrder = 1;

  numbers = Array(50);

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  changeStateItem() {
    this.currentStateItem = this.currentStateItem === 'initial' ? 'final' : 'initial';
  }

}
