// gerakkan efek awan //
let awan = document.getElementById('awan');
let sun = document.getElementById('sun');
let text = document.getElementById('text');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    awan.style.left = value * 0.25 + 'px';
    sun.style.top = value * 1.05 + 'px';
    text.style.marginRight = value * 3 + 'px';
    header.style.top = value * 0.5 + 'px';  
})

// search engine //
const search = () => {
    const searchbox = document.getElementById("search_item").value.toUpperCase();
    const storeitems = document.getElementById("sec")
    const product = document.querySelectorAll(".tab")
    const pname = storeitems.getElementsByTagName("h3")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h3')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

// send email //
function sendMail(){
    (function(){
        emailjs.init("McXZgfLFJqdnpVWSB"); // Accoint Public key
    })();

    var params = {
        sendername: document.querySelector("#sendername").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#pesan").value,
    };

    var serviceID = "service_o73k35p"; // Email Service ID
    var templateID = "template_9hup6qg"; //  Email template ID

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("email sent succesfully!");
    })
    .catch();
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_9hup6qg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});