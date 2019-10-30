module.exports = class ValidateForm {

    /**
     * Form validation
     * @returns {boolean}
     * @private
     */
    _validate () {

        this.error = false;

        // Check BOT token
        let botTokenInput = document.getElementById("botTokenInput");
        if (botTokenInput.value === '') {

            botTokenInput.classList.add("uk-form-danger");
            UIkit.notification({
                message: 'Enter a BOT token',
                status: 'danger',
                timeout: 5000
            });

            this.error = true;

        } else botTokenInput.classList.remove("uk-form-danger");

        // First bot message
        let requestBotMessage = document.querySelector('#request').value;
        let responseBotMessage = document.querySelector('#response').value;

        // Check exist bot message
        if (requestBotMessage === '' || responseBotMessage === '') {

            UIkit.notification({
                message: 'Enter a BOT message',
                status: 'danger',
                timeout: 5000
            });

            this.error = true;

        }

        return this.error;

    }

    /**
     * @returns {boolean}
     */
    validate () {
        return this._validate();
    }

};