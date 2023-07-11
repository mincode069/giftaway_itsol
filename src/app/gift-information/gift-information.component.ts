import { Component } from '@angular/core';

@Component({
    selector: 'app-gift-information',
    templateUrl: './gift-information.component.html',
    styleUrls: ['./gift-information.component.scss']
})
export class GiftInformationComponent {
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
}
