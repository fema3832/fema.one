document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(()=>{
        document.querySelector(".splash").classList.add("display-none");
    }, 2000);
})

function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(2);
        }, delayInms);
    });
}

document.onkeydown = function (e) {
	if (event.keyCode == 123)
	    return false;
        else if (e.ctrlKey && e.shiftKey && e.keyCode == 73)
            return false;
        else if (e.ctrlKey && e.keyCode == 73)
            return false;
        else if (e.ctrlKey && e.shiftKey && e.keyCode == 74)
            return false;
        else if (e.ctrlKey && e.keyCode == 74)
            return false;
};