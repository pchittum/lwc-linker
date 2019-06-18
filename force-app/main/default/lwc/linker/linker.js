import { LightningElement } from 'lwc';

export default class Linker extends LightningElement {

    get linkList(){
        return this.mockList;
    }

    mockList = [
        {
            label: "Developer Website",
            link: "https://developer.salesforce.com"
        },
        {
            label: "Trailhead Website",
            link: "https://trailhead.salesforce.com"
        }
    ];

}