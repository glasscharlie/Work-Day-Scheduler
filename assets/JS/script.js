var dateEl = document.querySelector("#date");
var currentTime = new Date().getHours(); 

var tenAM = document.querySelector("#tenam-text")
var elevenAM = document.querySelector("#elevenam-text")
var twelvePM = document.querySelector("#twelvepm-text")
var onePM = document.querySelector("#twelvepm-text")
var twoPM = document.querySelector("twopm-text")
var threePM = document.querySelector("threepm-text")
var fourPM = document.querySelector("fourpm-text")
var fivePM = document.querySelector("fivepm-text")

//function to set day of week for header
function dayOfWeek() {
    var weekDay = moment().format("dddd LL");
    dateEl.textContent = weekDay
}
dayOfWeek()



//function to change background color based on time of day
function backgroundColors() {
    //set background color of 9am
    if(currentTime > 9) {
        $("#nineam-text").css("background-color","grey")
    }
    else if(currentTime === 9) {
        $("#nineam-text").css("background-color","red")
    }
    else {
        $("#nineam-text").css("background-color","green")
    }

    //set background color of 10am
    if(currentTime > 10) {
        $("#tenam-text").css("background-color","grey")
    }
    else if(currentTime === 10) {
        $("#tenam-text").css("background-color","red")
    }
    else {
        $("#tenam-text").css("background-color","green")
    }    

    //set background color of 11am
    if(currentTime > 11) {
        $("#elevenam-text").css("background-color","grey")
    }
    else if(currentTime === 11) {
        $("#elevenam-text").css("background-color","red")
    }
    else {
        $("#elevenam-text").css("background-color","green")
    }    

    //set background color of 12pm
    if(currentTime > 12) {
        $("#twelvepm-text").css("background-color","grey")
    }
    else if(currentTime === 12) {
        $("#twelvepm-text").css("background-color","red")
    }
    else {
        $("#twelvepm-text").css("background-color","green")
    }    

    //set background color of 1pm
    if(currentTime > 13) {
        $("#onepm-text").css("background-color","grey")
    }
    else if(currentTime === 13) {
        $("#onepm-text").css("background-color","red")
    }
    else {
        $("#onepm-text").css("background-color","green")
    }    

    //set background color of 2pm
    if(currentTime > 14) {
        $("#twopm-text").css("background-color","grey")
    }
    else if(currentTime === 14) {
        $("#twopm-text").css("background-color","red")
    }
    else {
        $("#twopm-text").css("background-color","green")
    }    

    //set background color of 3pm
    if(currentTime > 15) {
        $("#threepm-text").css("background-color","grey")
    }
    else if(currentTime === 15) {
        $("#threepm-text").css("background-color","red")
    }
    else {
        $("#threepm-text").css("background-color","green")
    }    

    //set background color of 4pm
    if(currentTime > 16) {
        $("#fourpm-text").css("background-color","grey")
    }
    else if(currentTime === 16) {
        $("#fourpm-text").css("background-color","red")
    }
    else {
        $("#fourpm-text").css("background-color","green")
    } 
    
    //set background color of 5pm
    if(currentTime > 17) {
        $("#fivepm-text").css("background-color","grey")
    }
    else if(currentTime === 17) {
        $("#fivepm-text").css("background-color","red")
    }
    else {
        $("#fivepm-text").css("background-color","green")
    }    


}
backgroundColors()

function nineAMHandler(){
    var startButtonNine = document.querySelector("#nineAM-button")
    var nineAM = document.querySelector("#nineam-text")
    if ("nineAM" in localStorage) {
    nineAM.value = localStorage.getItem("nineAM")
    }

    startButtonNine.addEventListener("click", function(event){
        localStorage.setItem("nineAM", nineAM.value)
    });

}
nineAMHandler()


function tenAMHandler(){
    var startButtonTen = document.querySelector("#tenAM-button")
    var tenAM = document.querySelector("#tenam-text")
    if ("tenAM" in localStorage) {
    tenAM.value = localStorage.getItem("tenAM")
    }

    startButtonTen.addEventListener("click", function(event){
        localStorage.setItem("tenAM", tenAM.value);
    });

}
tenAMHandler()

function elevenAMHandler(){
    var startButtonEleven = document.querySelector("#elevenAM-button")
    var elevenAM = document.querySelector("#elevenam-text")
    if ("elevenAM" in localStorage) {
    elevenAM.value = localStorage.getItem("elevenAM")
    }

    startButtonEleven.addEventListener("click", function(event){
        localStorage.setItem("elevenAM", elevenAM.value);
        console.log('test')
    });

}
elevenAMHandler()

function twelvePMHandler(){
    var startButtonTwelve = document.querySelector("#twelvePM-button")
    var twelvePM = document.querySelector("#twelvepm-text")
    if ("twelvePM" in localStorage) {
    twelvePM.value = localStorage.getItem("twelvePM")
    }

    startButtonTwelve.addEventListener("click", function(event){
        localStorage.setItem("twelvePM", twelvePM.value);
        console.log('test')
    });

}
twelvePMHandler()

function onePMHandler(){
    var startButtonOne = document.querySelector("#onePM-button")
    var onePM = document.querySelector("#onepm-text")
    if ("onePM" in localStorage) {
    onePM.value = localStorage.getItem("onePM")
    }

    startButtonOne.addEventListener("click", function(event){
        localStorage.setItem("onePM", onePM.value);
        console.log('test')
    });

}
onePMHandler()

function twoPMHandler(){
    var startButtonTwo = document.querySelector("#twoPM-button")
    var twoPM = document.querySelector("#twopm-text")
    if ("twoPM" in localStorage) {
    twoPM.value = localStorage.getItem("twoPM")
    }

    startButtonTwo.addEventListener("click", function(event){
        localStorage.setItem("twoPM", twoPM.value);
        console.log('test')
    });

}
twoPMHandler()

function threePMHandler(){
    var startButtonThree = document.querySelector("#threePM-button")
    var threePM = document.querySelector("#threepm-text")
    if ("threePM" in localStorage) {
    threePM.value = localStorage.getItem("threePM")
    }

    startButtonThree.addEventListener("click", function(event){
        localStorage.setItem("threePM", threePM.value);
        console.log('test')
    });

}
threePMHandler()

function fourPMHandler(){
    var startButtonFour = document.querySelector("#fourPM-button")
    var fourPM = document.querySelector("#fourpm-text")
    if ("fourPM" in localStorage) {
    fourPM.value = localStorage.getItem("fourPM")
    }

    startButtonFour.addEventListener("click", function(event){
        localStorage.setItem("fourPM", fourPM.value);
        console.log('test')
    });

}
fourPMHandler()


function fivePMHandler(){
    var startButtonFive = document.querySelector("#fivePM-Button")
    var fivePM = document.querySelector("#fivepm-text")
    if ("fivePM" in localStorage) {
    fivePM.value = localStorage.getItem("fivePM")
    }

    startButtonFive.addEventListener("click", function(event){
        localStorage.setItem("fivePM", fivePM.value);
        console.log('test')
    });

}
fivePMHandler()

