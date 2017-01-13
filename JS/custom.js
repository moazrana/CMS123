$(document).ready(function () {

    $('body').on('click', '#advance', function (event) {
        event.preventDefault();
        $('#advance').hide();
        $("#hidden").show();
        search_params();
    });

    search_params = function () {
        action = $('.search_form').attr('action')
        action += "?" + $.param({ search: true });
        $('.search_form').attr('action', action);
    };

    if (window.location.search.length > 0) {
        $('#advance').hide();
        $('#hidden').fadeIn();
        search_params();

    }

    function showAlert() {
        alert("Wait for your event to be authenticated");

    }

  
    var spicker = new Pikaday({
        field: document.getElementById('sdate')
    });
    var epicker = new Pikaday({
        field: document.getElementById('edate')
    });

});


