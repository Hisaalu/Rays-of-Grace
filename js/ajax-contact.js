$(function () {

    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function (e) {
        e.preventDefault();

        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            dataType: 'json',
            headers: {
                'Accept': 'application/json'
            }
        })
        .done(function () {
            $(formMessages).removeClass('error').addClass('success');
            $(formMessages).text('Thank you! Your message has been sent successfully.');

            $('#contact-form input, #contact-form textarea').val('');
        })
        .fail(function () {
            $(formMessages).removeClass('success').addClass('error');
            $(formMessages).text('Oops! An error occurred and your message could not be sent.');
        });
    });

});
