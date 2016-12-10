$(document).ready(function () {
    function h(e) {
        $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight);
    }
    $('textarea').each(function () {
        h(this);
    }).on('input', function () {
        h(this);
    });

    $('#dialog-message').dialog({
        modal: true,
        buttons: {
            Ok: function() {
                $( this ).dialog( "close" );
            }
        }
    });
});