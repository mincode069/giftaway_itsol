import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import { GiftService } from '../gift.service';
import {MatDialogRef} from "@angular/material/dialog";
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
        private ref: MatDialogRef<GiftInforComponent>
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

        // Gọi service để thêm phần thưởng mới vào danh sách
        this.giftService.addGift(giftData);
    }


    closeDialog(): void {
        this.ref.close();
    }
}
