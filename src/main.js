dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString, startDate) // the start date is so that the days past can be updated
{
    const start = dayjs(startDate);

    const targetDate = dayjs(dateString);

    element.querySelector(".until__event").textContent = `Until ${targetDate.format("D MMMM YYYY")}`
    
    setInterval(() => {
        // calc difference in time
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));
        const timePast = dayjs.duration(now.diff(start));

        element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
        element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
        
        // console.log( timePast.asDays().toFixed(0).toString().padStart(2, "0"))
        // element.querySelector(".until__numeric--dayz").textContent = 10;
        element.querySelector(".until__numeric--secondz").textContent = timePast.seconds().toString().padStart(2, "0");
        element.querySelector(".until__numeric--minutez").textContent = timePast.minutes().toString().padStart(2, "0");
        element.querySelector(".until__numeric--hourz").textContent = timePast.hours().toString().padStart(2, "0");
        element.querySelector(".until__numeric--dayz").textContent = timePast.asDays().toFixed(0).toString().padStart(2, "0");
       

        
    }, 250);
}

var i = 0;
function move(startDate, endDate, element) {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
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
        element.querySelector("until__component--percent") = width;
        console.log(width)
      }
    }
  }
}

activateCountdown(document.getElementById("myCountdown"), "2023-8-1", "2023-5-10");

move("2023-5-10", "2023-8-1")




// buttons prefrences
// and module

// Get the modal
// var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

var date = document.getElementById("date");

if(date == "Date(YYYY-M-D):")
{
    activateCountdown(document.getElementById("myCountdown"), date, "2023-5-10");

    move("2023-5-10", date)
}

// YOU SHOULD ADD A COUNTER THAT STATES HOW MANY DAYS HAVE PASSED ALREADY!!