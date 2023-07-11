// import {Component, ViewEncapsulation} from '@angular/core';
//
//
// @Component({
//     selector: 'landing-sumup',
//     templateUrl: 'sumup.component.html',
//     encapsulation: ViewEncapsulation.None
// })
// export class SumupComponent {
//     listGiftLanding: any[] = [];
//
//     isOpenBox: boolean = false;
//     isRunning: boolean = false;
//
//     /**
//      * Constructor
//      */
//     constructor(
//         private _giftManageService: GiftManageService,
//     ) {
//     }
//
//     run() {
//         this.isRunning = true;
//
//         setTimeout(() => {
//             const confetti = require('canvas-confetti');
//             var myCanvas = document.createElement('canvas');
//             document.body.appendChild(myCanvas);
//
//             var myConfetti = confetti.create(myCanvas, {
//                 resize: true,
//                 useWorker: true
//             });
//
//             var end = Date.now() + (3 * 1000);
//             (function frame() {
//                 // launch a few confetti from the left edge
//                 myConfetti({
//                     particleCount: 8,
//                     angle: 60,
//                     spread: 100,
//                     origin: {x: 0},
//                 });
//                 myConfetti({
//                     particleCount: 8,
//                     angle: 120,
//                     spread: 100,
//                     origin: {x: 1},
//                 });
//
//                 // keep going until we are out of time
//                 if (Date.now() < end) {
//                     requestAnimationFrame(frame);
//                 }
//             }());
//
//             this.isOpenBox = true;
//             this.isRunning = false;
//         }, 4000);
//     }
// }
