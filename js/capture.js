var input = document.createElement("input");
input.setAttribute("type", "hidden");
input.setAttribute("id", "g-recaptcha-response");
input.setAttribute("name", "g-recaptcha-response");
document.getElementById("offer_form").appendChild(input);

var e = document.createElement('script');
e.type = "text/javascript";
e.src = 'https://www.google.com/recaptcha/api.js?render=6LdS4pQUAAAAALdCa9LXW3MCvgkciVdB6OELMa0L';
e.onload = function() {
    grecaptcha.ready( function() {
        getCaptchaToken();
    });
}
document.body.appendChild(e);

function getCaptchaToken() {
    grecaptcha.execute('6LdS4pQUAAAAALdCa9LXW3MCvgkciVdB6OELMa0L', {action: 'homepage'}).then(function(token) {
        document.getElementById('g-recaptcha-response').value = token;
    });
}

setTimeout( function() {
    getCaptchaToken();
}, 120000 );
