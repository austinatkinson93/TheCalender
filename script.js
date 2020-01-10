// Variables
var hourCheckEl = $.attr("data-name"[0])
var currentHour = moment().format('hA')
var containerEl = $("container")
var currentDayEl = $("#currentDay")
var time = [9,10,11,12,1,2,3,4,5]

function showtime() {
    currentDayEl.text(moment().format('LLL'))
    setTimeout(showtime, 1000)
}

function hourCheck() {


        if (hourCheckEl === currentHour){
            hourCheckEl.addClass("current").removeClass("past")
        } 
}

function saveCalender (){

}

console.log(hourCheckEl)

// Event Listeners

// function calls
showtime()
hourCheck()