var elementCurrentDay = document.querySelector("#currentDayOfTheWeek");
var elementCurrentUTCTime = document.getElementById("currentUTCTime");
const currentDate = new Date();

elementCurrentDay.textContent = getCurrentDayOfTheWeek();
elementCurrentUTCTime.textContent = getCurrentUTCTime();

function getCurrentDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfTheWeek = daysOfWeek[currentDate.getDay()];
    return currentDayOfTheWeek;
}

function getCurrentUTCTime() {
    const currentUTCTime = currentDate.getUTCMilliseconds();
    return currentUTCTime;
}
