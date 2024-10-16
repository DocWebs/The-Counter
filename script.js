/* ---------------- Initials ------------------ */

function openFullscreen() {
    let elem = document.documentElement; 
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { 
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { 
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
    }
    document.querySelector(".open-page").classList.remove("active");
    document.querySelector(".time").classList.add("active");
    setTimeout(function() {
        document.querySelector(".wrapper").classList.remove("pre");
    }, 100); 
    setTimeout(function() {
        document.querySelector(".title").classList.add("active");
    }, 800)
    setTimeout(function() {
        document.querySelector(".container").classList.add("active");
    }, 1500)
}

/* -------------- Event Control --------------- */

document.getElementById("togg").addEventListener("click", function() {
    document.querySelector(".bgg").classList.add("active");
    document.querySelector(".slider").classList.remove("hide");
});

document.querySelector(".btn1").addEventListener("click", function() {
    document.querySelector(".highlighter").classList.remove("sldr");
    setTimeout(function() {
        document.querySelector(".bgg").classList.remove("active");
        document.querySelector(".slider").classList.add("hide");
    }, 1200)
    setTimeout(function() {
        document.querySelector(".ttl2").classList.remove("active");
    }, 1700)  
    setTimeout(function() {
        document.querySelector(".cc2").classList.remove("active");
    }, 2200)
    setTimeout(function() {
        document.querySelector(".ttl1").classList.remove("active");
    }, 3800)
    setTimeout(function() {
        document.querySelector(".cc1").classList.remove("active");
    }, 4300)
    setTimeout(function() {
        document.getElementById("ttl1").textContent = '';
        document.getElementById("ttl2").textContent = '';
        document.querySelector(".ages").classList.remove("active");
    }, 5900) 
    setTimeout(function() {
        document.querySelector(".wrapper").classList.remove("phase");
    }, 6000)   
    setTimeout(function() {
        document.querySelector(".time").classList.add("active");
    }, 6500)
    setTimeout(function() {
        document.querySelector(".title").classList.add("active");
    }, 6600)
    setTimeout(function() {
        document.querySelector(".container").classList.add("active");
    }, 7300)
});

document.querySelector(".btn2").addEventListener("click", function() {
    document.querySelector(".highlighter").classList.add("sldr");
    setTimeout(function() {
        document.querySelector(".bgg").classList.remove("active");
        document.querySelector(".slider").classList.add("hide");
    }, 1200)
    setTimeout(function() {
        document.querySelector(".title").classList.remove("active");
    }, 1700)
   setTimeout(function() {
        document.querySelector(".container").classList.remove("active");
    }, 2500)
    setTimeout(function() {
        document.querySelector(".time").classList.remove("active");
        document.querySelector(".wrapper").classList.add("phase");
    }, 4100)
    setTimeout(function() {
        document.querySelector(".ages").classList.add("active");
    }, 4500)
    setTimeout(function() {
        document.querySelector(".ttl1").classList.add("active");
    }, 4700)
    setTimeout(function(){
        const text = "Sweety's age ...";
        const pElement = document.getElementById("ttl1");
        let index = 0;
        function type() {
            if (index < text.length) {
                pElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    }, 5000)
    setTimeout(function() {
        document.querySelector(".cc1").classList.add("active");
    }, 5600)
    setTimeout(function() {
        document.querySelector(".ttl2").classList.add("active");
    }, 7200)
    setTimeout(function(){
        const text = "Sweetu's age ...";
        const pElement = document.getElementById("ttl2");
        let index = 0;
        function type() {
            if (index < text.length) {
                pElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    }, 7500)
    setTimeout(function() {
        document.querySelector(".cc2").classList.add("active");
    }, 7800)
});

function disableButton() {
  const button = document.getElementById("baka1");
  const button_ = document.getElementById("baka2");
  button.disabled = true;
  button_.disabled = true;

  setTimeout(() => {
    button.disabled = false;
    button_.disabled = false;
  }, 10000);
}

/* ------------- Time Dialect ----------------- */

function updateTime1() {
    const startTime = new Date('2022-02-26T06:53:00');
    const currentTime = new Date(); 

    let diffYears = currentTime.getFullYear() - startTime.getFullYear();
    let diffMonths = currentTime.getMonth() - startTime.getMonth();
    let diffDays = currentTime.getDate() - startTime.getDate();
    let diffHours = currentTime.getHours() - startTime.getHours();
    let diffMinutes = currentTime.getMinutes() - startTime.getMinutes();
    let diffSeconds = currentTime.getSeconds() - startTime.getSeconds();

    // Adjust for negative values
    if (diffSeconds < 0) {
        diffSeconds += 60;
        diffMinutes--;
    }
    if (diffMinutes < 0) {
        diffMinutes += 60;
        diffHours--;
    }
    if (diffHours < 0) {
        diffHours += 24;
        diffDays--;
    }
    if (diffDays < 0) {
        const previousMonth = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0).getDate();
        diffDays += previousMonth;
        diffMonths--;
    }
    if (diffMonths < 0) {
        diffMonths += 12;
        diffYears--;
    }

    document.getElementById('Y1').textContent = diffYears;
    document.getElementById('M1').textContent = diffMonths;
    document.getElementById('D1').textContent = diffDays;
    document.getElementById('h1').textContent = diffHours;
    document.getElementById('m1').textContent = diffMinutes;
    document.getElementById('s1').textContent = diffSeconds;
}

setInterval(updateTime1, 1000);

function updateTime2() {
    const startTime = new Date('2007-12-08T12:50:48');
    const currentTime = new Date(); 

    let diffYears = currentTime.getFullYear() - startTime.getFullYear();
    let diffMonths = currentTime.getMonth() - startTime.getMonth();
    let diffDays = currentTime.getDate() - startTime.getDate();
    let diffHours = currentTime.getHours() - startTime.getHours();
    let diffMinutes = currentTime.getMinutes() - startTime.getMinutes();
    let diffSeconds = currentTime.getSeconds() - startTime.getSeconds();

    if (diffSeconds < 0) {
        diffSeconds += 60;
        diffMinutes--;
    }
    if (diffMinutes < 0) {
        diffMinutes += 60;
        diffHours--;
    }
    if (diffHours < 0) {
        diffHours += 24;
        diffDays--;
    }
    if (diffDays < 0) {
        const previousMonth = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0).getDate();
        diffDays += previousMonth;
        diffMonths--;
    }
    if (diffMonths < 0) {
        diffMonths += 12;
        diffYears--;
    }

    document.getElementById('Y2').textContent = diffYears;
    document.getElementById('M2').textContent = diffMonths;
    document.getElementById('D2').textContent = diffDays;
    document.getElementById('h2').textContent = diffHours;
    document.getElementById('m2').textContent = diffMinutes;
    document.getElementById('s2').textContent = diffSeconds;
}

setInterval(updateTime2, 1000);

function updateTime3() {
    const startTime = new Date('2008-02-26T13:08:00');
    const currentTime = new Date(); 

    let diffYears = currentTime.getFullYear() - startTime.getFullYear();
    let diffMonths = currentTime.getMonth() - startTime.getMonth();
    let diffDays = currentTime.getDate() - startTime.getDate();
    let diffHours = currentTime.getHours() - startTime.getHours();
    let diffMinutes = currentTime.getMinutes() - startTime.getMinutes();
    let diffSeconds = currentTime.getSeconds() - startTime.getSeconds();

    if (diffSeconds < 0) {
        diffSeconds += 60;
        diffMinutes--;
    }
    if (diffMinutes < 0) {
        diffMinutes += 60;
        diffHours--;
    }
    if (diffHours < 0) {
        diffHours += 24;
        diffDays--;
    }
    if (diffDays < 0) {
        const previousMonth = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0).getDate();
        diffDays += previousMonth;
        diffMonths--;
    }
    if (diffMonths < 0) {
        diffMonths += 12;
        diffYears--;
    }

    document.getElementById('Y3').textContent = diffYears;
    document.getElementById('M3').textContent = diffMonths;
    document.getElementById('D3').textContent = diffDays;
    document.getElementById('h3').textContent = diffHours;
    document.getElementById('m3').textContent = diffMinutes;
    document.getElementById('s3').textContent = diffSeconds;
}

setInterval(updateTime3, 1000);            