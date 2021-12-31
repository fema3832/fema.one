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

    console.log("\n%c%cWelcome to fema.one \ud83d\udc96\n","font-weight: bold; font-size: 20px; color: #ad6edd; text-shadow: 1px 1px 4px black",
    "font-weight: bold; font-size: 50px; color: #ad6edd; text-shadow: 1px 1px 4px black")
