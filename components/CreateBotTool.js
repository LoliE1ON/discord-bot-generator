module.exports = class CreateBotTool {

    constructor (messagesContainer) {

        this.messagesContainer = messagesContainer;
        this.messages = {
            ping: 'pong',
            test: '123'
        };

        console.log("test");

    }

    addNewMessage() {

        let messageBlock = `
        <div id="message" class="uk-child-width-1-2 uk-text-center uk-margin" uk-grid>
            <div>
                <div class="uk-margin">
                    <input class="uk-input" type="text" id="request" placeholder="Request">
                </div>
            </div>
            <div>
                <div class="uk-margin">
                    <input class="uk-input" type="text" id="response" placeholder="Response">
                </div>
            </div>
        </div>`;

        this.messagesContainer.insertAdjacentHTML('afterend', messageBlock);
    }

}