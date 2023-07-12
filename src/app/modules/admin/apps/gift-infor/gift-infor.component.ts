import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'gift-infor',
    templateUrl: 'gift-infor.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftInforComponent {
    giftCode: string;
    giftName: string;
    giftDescription: string;
    // Add other properties and methods as needed

    close(): void {
        // Logic to close the gift information component
    }

    handleImageUpload(event: any): void {
        // Logic to handle image upload
    }

    save(): void {
        // Logic to save the gift information
    }

    closeDialog() {

    }

    saveAndCloseDialog() {

    }
}
