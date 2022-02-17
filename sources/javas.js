window.onload = function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    document.getElementById("load").innerHTML = "load time: " + loadTime + " ms";
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(()=>{
        document.querySelector(".splash").classList.add("display-none");
    }, 1000)
})

document.onkeydown = function (e) {
    if(e.keyCode == 123) {
        return false;
    }
}

console.log("\n%c%cWelcome to fema.one \ud83d\udc96\n","font-weight: bold; font-size: 20px; color: #ad6edd; text-shadow: 1px 1px 4px black","font-weight: bold; font-size: 45px; color: #ad6edd; text-shadow: 1px 1px 4px black")
console.log("\n%c%cI purposely didn't disable ctrl+shift+i.\n","font-weight: bold; font-size: 20px; color: #ad6edd; text-shadow: 1px 1px 4px black","font-weight: bold; font-size: 20px; color: #ad6edd; text-shadow: 1px 1px 4px black");