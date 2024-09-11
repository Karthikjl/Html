function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const med = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const sec = now.getSeconds().toString().padStart(2, 0);
  const min = now.getMinutes().toString().padStart(2, 0);
  const time = `${hours}:${min}:${sec} ${med}`;
  let update = document.getElementById("clock-txt");
  update.textContent = time;
}
function updateDate(){
    const now = new Date();
    let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Saturday'];
    day = day[now.getDay()];
    let date = now.getDate().toString().padStart(2,0);
    let month = (now.getMonth()+ 1).toString().padStart(2,0);
    let year = now.getFullYear().toString().padStart(4,0);
    const dateVal = `${date}-${month}-${year}`
    let update = document.getElementById("date-txt");
    let updateDay = document.getElementById("day-txt");
    updateDay.textContent = ` ${day}`;
    update.textContent = dateVal;
}
updateDate();
setInterval(updateTime, 1000);
