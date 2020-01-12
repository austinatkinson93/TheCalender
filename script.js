// Variables
var hourCheckEl = $.attr("data-name"[0])
var currentHour = parseInt(moment().format('H'));
var containerEl = $("container")
var currentDayEl = $("#currentDay")
var time = [9,10,11,12,1,2,3,4,5]

function showtime() {
    currentDayEl.text(moment().format('LLL'))
    setTimeout(showtime, 60000)
}

function hourCheck() {

    $(".time-block").each(function(index){
        $("this").removeClass("past").removeClass("present").removeClass("future");
        var calendarHour = parseInt($(this).attr("data-hour"));
        //$(this).data("hour");
        // console.log(typeof calendarHour)
        // console.log(typeof currentHour)
        //calendarHour = parseInt(calendarHour);

        $(this).val(localStorage.getItem(calendarHour));

        if (calendarHour === currentHour){
            $(this).addClass("present")
        } else if (calendarHour > currentHour){
            $(this).addClass("future")
        } else if (calendarHour < currentHour){
            $(this).addClass("past")
        }
    })
    setTimeout(hourCheck, 600000)
}

// Event Listener
$(".saveBtn").click(function(event){
    var task = $(this).siblings("textarea").val();
    localStorage.setItem($(this).attr("id"), task);
})



// function calls
showtime()
hourCheck()