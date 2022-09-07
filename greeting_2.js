const currentDate = new Date();
module.exports.date = currentDate;

global.date = currentDate;

module.exports.getMessage = function () {
    const hour = currentDate.getHours();
    if (hour > 16) {
        return `Good evening ${global.name}`
    } else if (hour > 10) {
        return `Good day ${global.name}`
    } else return `Good morning ${name}`

}