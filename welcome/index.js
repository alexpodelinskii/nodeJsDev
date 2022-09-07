const morning = require('./morning');
const evening = require('./evening');

module.exports = {
    getMorningMessag: function () {
        console.log(morning)
    },
    gerEveningMessage: function () {
        console.log(evening);
    }
}