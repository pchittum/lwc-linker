import { LightningElement, track } from 'lwc';

export default class Linker extends LightningElement {

    @track activeSectionMessage = '';

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
        },
        {
            label: "Dev.tv",
            link: "https://developer.salesforce.com/tv"
        }
    ];

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }

    handleAddLink(){
        this.activeSectionMessage = 'Add Link Clicked';
    }

}