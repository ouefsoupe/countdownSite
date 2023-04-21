dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString)
{
    const targetDate = dayjs(dateString);

    element.querySelector(".until__event").textContent = `Until ${targetDate.format("D MMMM YYYY")}`
    
    setInterval(() => {
        // calc difference in time
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));

        element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
        element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
    }, 250);
}

activateCountdown(document.getElementById("myCountdown"), "2023-8-5");

var i = 0;
function move(startDate, endDate) {
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    console.log("end = " + end);
    console.log("start = " + start) ;
// each iteration of the interval i need to calc the difference
// in seconds or maybe days between the start and end
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        const total = end - start;
        const current = dayjs();
        var difference = current - start;
        const percent = (difference / total)*100;
        width = percent;
        elem.style.width = width + "%";
      }
    }
  }
}

move("2023-4-20", "2023-8-5")