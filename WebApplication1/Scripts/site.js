$(function () {
    $(document).on('captcha-required-changed', function () {
        //limpar todos os captcha
        $('.captcha').html('');
        var contentId = $('#captcha-id-enabled').data('id-div');
        var required = $('#' + contentId).data('required');
        if (required === undefined || required === true) {
            $.ajax({
                url: 'Home/CaptchaGoogle',
                type: 'GET',
                success: function (data) {
                    if (data) {  // check if data is defined
                        $("#" + contentId).html(data);
                    }
                }
            });
        }
    });

    $('#esqueciMinhaSenha').click(function () {
        $('#captcha-id-enabled').data('id-div', 'captchaRetrieved');
        $(document).trigger('captcha-required-changed');
    });

    $('#myModal').on('hide.bs.modal', function () {
        $('#captcha-id-enabled').data('id-div', 'captchaLogin');
        $(document).trigger('captcha-required-changed');
    });  
});