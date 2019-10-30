module.exports = class GenerateBot {

    _prepareData () {

        this._botToken = document.getElementById("botTokenInput");

        this._botGenerateProcFile = document.getElementById("generateProcFile");

        this._botMessagesRequest = document.querySelectorAll("#request");
        this._botMessagesResponse = document.querySelectorAll("#response");

        console.log(this);

    }

    generate () {
        this._prepareData();
    }

}