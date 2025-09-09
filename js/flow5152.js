$(document).ready( function() {

    function timeline(current) {
        var break1 = $('#address').closest('.step').index()-1;
        var break2 = $('#listed').closest('.step').index()-1;

        if( current >= break1 && current <= break2 ) {    // Step 2
            $('#da-timeline').removeClass('da-2 da-3');
            $('#da-timeline').addClass('da-2');
        } 
        else if ( current > break2 ) {                    // Step 3
            $('#da-timeline').addClass('da-3');
        } 
        else {
            $('#da-timeline').removeClass('da-2 da-3');   // Step 1
        }
    }

    var btn = $(this);

    $('.stepBtn, .submitBtn').click( function() {

        var obj = $(this).parent('.step').find('select,input');
        var name = obj.attr('name');
        var action;

        btn = $(this);

        timeline( btn.closest('.step').index() );

        if( obj.val() == "" )
        {
            if( obj.is('select') ) {
                action = 'select';
            }

            if( obj.is('input') ) {
                action = 'enter';
            }

            if( name == "bedrooms" ) {
                name = "rooms";
            }

            $('#'+name+'_error').html('Please '+action+' '+ name.replace("_", " ") );
            $('#'+name).addClass('field_error');

            $('#'+name).focus(function() {
                $(this).removeClass('field_error');
            });

            return;
        }

        $('#'+name).focus(function() {
            $(this).removeClass('field_error');
        });

        switch( name ) {
            case 'occupancy': 
                        if( $('#occupancy').val() == "2" && $('#rental_income').val() == "" ) {
                            $('#rental_income_error').html('Please enter rental income');
                            $('#rental_income').addClass('field_error');
                            return;
                        }
                        break;

            case 'zip': if( !obj.val().match(/[0-9]{5}/) ) {
                            $('#zip_error').html('Please enter a valid zip code');
                            $('#'+name).addClass('field_error');
                            return;
                        }
                        break;

            case 'address': 
                        if( obj.val().length < 4 ) {
                            $('#address_error').html('Please enter a valid address');
                            $('#'+name).addClass('field_error');
                            return;
                        }
                        if( $('#city').val().length < 2 ) {
                            $('#address_error').html('Please enter a valid city');
                            $('#city').addClass('field_error');
                            return;
                        }
                        if( $('#state').val() == "" ) {
                            $('#address_error').html('Please enter a valid state');
                            $('#state').addClass('field_error');
                            return;
                        }
                        if( !$('#zip').val().match(/[0-9]{5}/) ) {
                            $('#address_error').html('Please enter a valid zip code');
                            $('#zip').addClass('field_error');
                            return;
                        }

                        btn.prop('disabled', true);
                        $('.btn-spinner').show();

                        $.post( "submit.php", { page: "addrVerify", 
                                                address: $('#address').val(),
                                                city: $('#city').val(),
                                                state: $('#state').val(),
                                                zip: $('#zip').val() })
                        .done(function( data ) {
                            btn.prop('disabled', false);
                            $('.btn-spinner').hide();

                            if( data.status == 0 ) {
                                $('#address').val( data.street );
                                $('#city').val( data.city );
                                $('#state').val( data.state );
                                $('#zip').val( data.zip );
/*
                                $('#addr-street').html( data.street );
                                $('#addr-city').html( data.city );
                                $('#addr-state').html( data.state );
                                $('#addr-zip').html( data.zip );
                                $('.modal').modal('show');
*/

                                btn.closest('.step').slideToggle("fast","swing");
                                btn.closest('.step').next().slideToggle("fast","swing");

                                $('#address_error').html('');
                            }
                            else {
                                $('#address_error').html('Invalid address. Please retry.');
                            }
                        });
                        return;
                        break;

            case 'bedrooms': 
                        var bedrooms = $('#bedrooms').val();
                        var bathrooms = $('#bathrooms').val();

                        $('#rooms_error').html('');
                        
                        if( bedrooms == '' ) {
                            $('#rooms_error').html('Please enter number of bedrooms');
                            $('#bedrooms').addClass('field_error');
                            return;
                        }
                        
                        if( bathrooms == '' ) {
                            $('#rooms_error').html('Please enter number of bathrooms');
                            $('#bathrooms').addClass('field_error');
                            return;
                        }
                        break;

            case 'full_name': 
                        var full_name = $('#full_name').val();

                        $('#full_name_error').html('');

                        if( full_name.indexOf(' ') == -1 ) {
                            $('#full_name_error').html('Please enter your FIRST and LAST name');
                            $('#'+name).addClass('field_error');
                            return false;
                        }

                        var name = full_name.split(" ", 2);
                        
                        if( name[0] == '' || name[0].length < 2 || name[1] == '' || name[1].length < 2 ) {
                            $('#full_name_error').html('Please enter your FIRST and LAST name');
                            $('#'+name).addClass('field_error');
                            return false;
                        }
                        break;

            case 'first_name': 
                        var first_name = $('#first_name').val();

                        $('#full_name_error').html('');

                        if( first_name == '' || first_name.length < 2 ) {
                            $('#full_name_error').html('Please enter your FIRST name');
                            $('#first_name').addClass('field_error');
                            return false;
                        }

                        var last_name = $('#last_name').val();

                        if( last_name == '' || last_name.length < 2 ) {
                            $('#full_name_error').html('Please enter your LAST name');
                            $('#last_name').addClass('field_error');
                            return false;
                        }
                        break;

            case 'email': 
                        var email = $('#email').val();
                        if( email == '' || email.length < 2 ) {
                            $('#email_error').html('Please enter a valid email');
                            $('#'+name).addClass('field_error');
                            return;
                        }

                        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                        if( !re.test(email) ) {
                            $('#email_error').html('Please enter a valid email');
                            $('#'+name).addClass('field_error');
                            return;
                        }
                        break;

            case 'phone': 
                        var phone = $('#phone').val();

                        $('#phone_error').html('');
                        
                        if( phone == '' || phone.length < 10 ) {
                            $('#phone_error').html('Please enter a valid phone number');
                            $('#'+name).addClass('field_error');
                            return;
                        }

                        var re = /^555/;
                        if( re.test(phone) ) {
                            $('#phone_error').html('Please enter a valid phone number');
                            $('#'+name).addClass('field_error');
                            return;
                        }

/*
                        if( $('input[name=cell_phone]:checked').val() == undefined ) {
                            $('#cell_phone_error').html('<br>Please answer if cell phone');
                            return;
                        }
*/
                        var formData = new FormData();
                        formData.append('page', 'phn');
                        formData.append('phone', phone);

                        fetch('submit.php', 
                            { method: 'POST', body: formData }
                        )
                        .then(function(response) {
                            return response.json();
                        })
                        .then(function(myJson) {
                            if( myJson.status == 0 ) {
                                alert('Invalid Phone');
                                return;
                            }

                            $('.step').hide();

                            window._vis_opt_queue = window._vis_opt_queue || [];
                            window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(200);});

                            $('#offer_form').submit();
                        })
                        .catch(function(error) {
                            $('.step').hide();
                            $('#offer_form').submit();
                        });

                        return;
        }

        $('#'+name+'_error').html('');

        $(this).parent('.step').slideToggle("fast","swing");

        if( name == "email" && $(this).parent('.step').next().hasClass('hide') )
        {
            $(this).parent('.step').next().next().slideToggle("fast","swing");
        }
        else
        {
            $(this).parent('.step').next().slideToggle("fast","swing");
        }

        if( Pushnami ) {
            if( name == "address" ) {
                name = "zip";
            }
            Pushnami.update({[name]: $('#'+name).val()});
        }

        $('form').ajaxSubmit( {url: 'submit.php?page=partial', beforeSubmit: function(arr, $form, options) {
            arr[0].name = 'partial';
        }});

        window.scrollTo(0,0);
    });

    $('.back').click( function() {

        timeline( $(this).closest('.step').index() - 2 );

        var step = $(this).closest('.step');
        step.slideToggle("fast","swing");
        step.prev().slideToggle("fast","swing");

        window.scrollTo(0,0);
    });

    $('.step').first().show();

    $('.next').change( function() {
        var obj = $(this).closest('.step').find('.stepBtn');
        obj.click();
    });

    $('.btn-success').click( function() {
        $('#address').val( $('#addr-street').html() );
        $('#city').val( $('#addr-city').html() );
        $('#state').val( $('#addr-state').html() );
        $('#zip').val( $('#addr-zip').html() );

        $('.modal').modal('hide');
        btn.closest('.step').slideToggle("fast","swing");
        btn.closest('.step').next().slideToggle("fast","swing");
        window.scrollTo(0,0);
    });
});
