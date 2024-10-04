var isValid = true;
// Hàm validate Full Name
function validate(name,err) {
  if (name.val().trim() === '') {
    // Nếu input trống, đổi màu nền thành đỏ và hiển thị lỗi
    name.css('border-color', '#ca3112');
    err.text('This field is required.');
    isValid = false;
  } else {
    // Xóa màu nền và thông báo lỗi nếu có giá trị
    name.css('border-color', '');
    err.text('');
  }
}


$(document).ready(function () {
  isValid = false;
  $('#schoolname').on('input blur', function () {
    validate($('#schoolname'), $('#errschoolname'));
  });

  
  $('#concentration1').on('input blur', function () {
    validate($('#concentration1'), $('#errconcentration1'));
  });

  $('#concentration2').on('input blur', function () {
    validate($('#concentration1'), $('#errconcentration2'));
  });


  $('#highschoolname').on('input blur', function () {
    validate($('#highschoolname'), $('#errhighschoolname'));
  });
  $("#btnlog").click(function () {
    $("#block").css("display", "block").focus();
});

// Sự kiện click vào bất kỳ đâu trên document
$(document).click(function (e) {
    // Kiểm tra nếu không phải click vào #block hoặc #btnlog thì ẩn #block
    if (!$(e.target).closest('#block, #btnlog').length) {
        $("#block").css("display", "none");
    }
});

  $("#next").click(function () {
    isValid = true;
    validate($('#schoolname'), $('#errschoolname'));
    localStorage.setItem('sschoolname', $('#schoolname').val());

    validate($('#concentration1'), $('#errconcentration1'));
    localStorage.setItem('sconcentration1', $('#concentration1').val());

    validate($('#concentration2'), $('#errconcentration2'));
    localStorage.setItem('sconcentration2', $('#concentration2').val());
    
    validate($('#highschoolname'), $('#errhighschoolname'));
     localStorage.setItem('shighschoolname', $('#highschoolname').val());

    if (isValid) {
        window.location.href = "../resume/voluntarySelfId.html";
    }
  });

});