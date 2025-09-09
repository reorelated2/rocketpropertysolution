$(document).ready(function() { 

    var clicked = false;

    var options = { 
        dataType:  'json',
        success: function processJson( data ) { 

            clicked = false;

            if( data.status == 1 ) // errors
            {
                alert( data.msg.replace(/<br\/>/g, "\n") );

                $.each(data.fields, function(index, value) {
                    $('#'+value).addClass('field_error');

                    $('#'+value).focus(function() {
                         $(this).removeClass('field_error');
                    });
                });

                $('.step').first().show();

                return;
            }
        
            document.location.href = 'thankyou.php';
        },

        beforeSubmit: function(arr, $form, options) { 

           if( clicked ) {
               return false;
           }

           clicked = true;

           return true;
        }
    }; 
 
    $('#offer_form').ajaxForm(options); 

    $('#offer_form').submit(function() {

//        var name = $("input[name='full_name']").val().split(" ", 2);
//if( name[0] != "test" ) {        

if( $('#first_name').val() != "test" ) {
        _webpushTrackAttributes({
            "aff_id": $("input[name='aid']").val(),
            "first_name": name[0],
            "city": $("input[name='city']").val(),
            "state": $("input[name='state']").val(),
            "zip": $("input[name='zip']").val()
        });
}
        $(this).ajaxSubmit(options);
        return false;
    });
}); 
