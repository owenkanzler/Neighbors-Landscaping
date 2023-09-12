// Navbar
const navbar = document.querySelector('.header');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};
// Email
function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    const serviceID = 'service_u1p8zxv';
    const templateID = 'template_sk73ywp';

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('number').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            console.log(res);
            alert('your message sent successfully');
    })
        .catch((err) => console.log(err));
}
