export default class HtmlService {
    constructor() {
        console.log('Service created successfully!');
        this.bindFromEvent();
    }

    bindFromEvent() {
        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            console.log(form.item.value);
            form.reset();
        })
    }




}