function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function accordion() {
    let buttons = document.getElementsByClassName("accordion-button");
    let i;
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let current = this.parentElement.parentElement.parentElement;
            let currentTab = current.lastElementChild;
            let currentTabIsActive = currentTab.classList.contains("active-tab");
            currentTab.classList.remove(currentTabIsActive ? "active-tab" : "passive-tab")
            currentTab.classList.add(currentTabIsActive ? "passive-tab" : "active-tab")


            let items = document.getElementsByClassName("accordion-item");
            let idx = Array.prototype.indexOf.call(items, current);
            for (i = 0; i < items.length; i++) {
                let current = items[i];
                current.lastElementChild.classList.add(i === idx ? "active-tab" : "passive-tab");
                current.lastElementChild.classList.remove(i === idx ? "passive-tab" : "active-tab");
            }
        });
    }
}

accordion();

function countdown() {

    let countDownDate = new Date("2022, 10, 30").getTime();

    let x = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;


        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.getElementById("day").innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}

countdown()

let nameSurname = document.getElementById('nameSurname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let username = document.getElementById('username');
let formButton = document.getElementById('formbutton')

formButton.addEventListener('click', formAddConsole)

function formAddConsole() {
    console.log(`Ad Soyad : ${nameSurname.value}`)
    console.log(`Email : ${email.value}`)
    console.log(`Telefon : ${phone.value}`)
    console.log(`Kullanıcı Adı : ${username.value}`)


}