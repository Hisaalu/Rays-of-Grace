$(function () {

    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function (e) {
        e.preventDefault();

        var isValid = true;

        $(form).find('input, textarea').each(function () {
            if ($(this).val().trim() === '') {
                isValid = false;
            }
        });

        if (!isValid) {
            $(formMessages).removeClass('success').addClass('error');
            $(formMessages).text('Please fill in all the fields before submitting the form.');
            return;
        }

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: $(form).serialize(),
            dataType: 'json',
            headers: { 'Accept': 'application/json' }
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
