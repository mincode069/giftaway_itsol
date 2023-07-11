import {Component, ViewEncapsulation} from '@angular/core';
import {GiftManageService} from "../../admin/apps/gift-manage/gift-manage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RESPONSE_CODE} from "../../../shared/constants/app.constants";

@Component({
    selector: 'landing-sumup-random',
    templateUrl: 'sumup-random.component.html',
    styleUrls: ['./sumup-random.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SumupRandomComponent {
    isOpenBox: boolean = false;
    isRunning: boolean = false;
    isHoverRunBtn: boolean = false;

    giftCode: string;
    giftDetail: any = {};

    /**
     * Constructor
     */
    constructor(
        private _giftManageService: GiftManageService,
        private activatedRoute: ActivatedRoute,
        private _router: Router,
    ) {
        this.giftCode = this.activatedRoute.snapshot.paramMap.get("code");
        this.getGiftDetail();

        setInterval(() => {
            this.isHoverRunBtn = !this.isHoverRunBtn;
        }, 1000)
    }

    getGiftDetail() {
        this._giftManageService.getGiftDetail(this.giftCode).subscribe(
            response => {
                if (RESPONSE_CODE.SUCCESS == response.code) {
                    this.giftDetail = response.data;

                    /*if (this.giftDetail.userWin && this.giftDetail.userWin.trim().length > 0) {
                        this._router.navigate([`/apps/gift-manage`]);
                    }*/
                } else {
                    this._router.navigate([`/apps/gift-manage`]);
                }
            }, error => {
                console.log(error);
                this._router.navigate([`/apps/gift-manage`]);
            });
    }

    run() {
        this.isRunning = true;
        this.playSound();

        this._giftManageService.random(this.giftCode).subscribe(
            response => {
                if (RESPONSE_CODE.SUCCESS == response.code) {
                    setTimeout(() => {
                        const confetti = require('canvas-confetti');
                        var myCanvas = document.createElement('canvas');
                        document.body.appendChild(myCanvas);

                        var myConfetti = confetti.create(myCanvas, {
                            resize: true,
                            useWorker: true
                        });

                        var end = Date.now() + (3 * 1000);
                        (function frame() {
                            // launch a few confetti from the left edge
                            myConfetti({
                                particleCount: 8,
                                angle: 50,
                                spread: 50,
                                origin: {x: 0.13, y: 0.55},
                            });
                            myConfetti({
                                particleCount: 8,
                                angle: 140,
                                spread: 50,
                                origin: {x: 0.86, y: 0.55},
                            });

                            // keep going until we are out of time
                            if (Date.now() < end) {
                                requestAnimationFrame(frame);
                            }
                        }());

                        this.isOpenBox = true;
                        this.isRunning = false;
                        this.giftDetail = response.data;

                        this.stopSound();
                    }, 5000);
                } else if (response.code == 'NO_EMP') {
                    alert('Không tìm thấy Nhân viên để quay thưởng!');
                    this._router.navigate([`/apps/gift-manage`]);
                }
            }, error => {
                console.log(error);
                this._router.navigate([`/apps/gift-manage`]);
            });
    }

    reRun() {
        this.stopSound();
        this._giftManageService.resetUserWin(this.giftDetail.id).subscribe(
            response => {
                if (RESPONSE_CODE.SUCCESS == response.code) {
                    this.isOpenBox = false;
                    this.giftDetail.userWinFullName = null;
                    this.giftDetail.userWin = null;
                }
            }, error => {
                console.log(error);
                this._router.navigate([`/apps/gift-manage`]);
            });
    }

    nextGift() {
        this.removeCanvas();
        setTimeout(() => {
            this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this._router.navigate([`/random/${this.giftDetail.nextGift.code}`]);
            });
        }, 1500)

        this.isOpenBox = false;
    }

    removeCanvas() {
        Array.prototype.slice.call(document.getElementsByTagName('canvas')).forEach(
            function (item) {
                item.remove();
                // or item.parentNode.removeChild(item); for older browsers (Edge-)
            });
    }

    stopSound() {
        Array.prototype.slice.call(document.getElementsByTagName('audio')).forEach(
            function (item) {
                item.remove();
                // or item.parentNode.removeChild(item); for older browsers (Edge-)
            });
    }

    playSound(path = 'assets/sound/nhacnen.mp3') {
        const audioElement = document.createElement('audio');

        if (!audioElement) {
            return;
        }

        audioElement.setAttribute('src', path);
        audioElement.addEventListener('load', () => {
            audioElement.play();
        }, true);
        audioElement.pause();
        audioElement.play();
    }
}
