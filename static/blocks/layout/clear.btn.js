$(function () {
    var $clearBtn = $('.search__clear'),
        $cityInput = $('.search__input');

    $cityInput.on( 'keyup', function() {
        var value = $(this).val().trim();
        $clearBtn.toggleClass('hidden', !value );
    });

    $clearBtn.on( 'click', function() {
        $cityInput.val('').focus();
        $(this).addClass('hidden');
    });
});
