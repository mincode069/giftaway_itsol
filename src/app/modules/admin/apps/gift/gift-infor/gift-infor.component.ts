import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import { GiftService } from '../gift.service';
import {MatDialogRef} from "@angular/material/dialog";
import {RESPONSE_CODE} from "../../../../../shared/constants/app.constants";
import {GiftListService} from "../gift-list/gift-list.service";
@Component({
    selector: 'gift-infor',
    templateUrl: 'gift-infor.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftInforComponent {
    giftCode: string;
    giftName: string;
    giftDescribe: string;
    giftImage: string;
    // Add other properties and methods as needed

    constructor(
        private giftService: GiftService,
        private cdr: ChangeDetectorRef,
        private ref: MatDialogRef<GiftInforComponent>,
        private _giftService: GiftListService
    ) {}


    handleImageUpload(event: any): void {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.giftImage = e.target.result;
                this.cdr.detectChanges();
            };
            reader.readAsDataURL(file);
        }
    }

    save(): void {
        const giftData = {
            giftCode: this.giftCode,
            giftName: this.giftName,
            giftDescribe: this.giftDescribe,
            imageUrl: this.giftImage
        };

        console.log('Thông tin phần thưởng:', giftData);

        this._giftService.save(giftData).subscribe((response) => {
                if (RESPONSE_CODE.SUCCESS === response.code && response.data) {
                    this.closeDialog('success');
                }
            });
    }

    closeDialog(message?): void {
        this.ref.close(message);
    }
}
