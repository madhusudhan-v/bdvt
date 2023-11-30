function contactUsEmailSendLinkUpdate() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    const queryType = formData.get('queryType');
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = 'Contact Form Submission - ${'+queryType+'}';
    const body = 'Name:'+name+'%0D%0AEmail:'+email+'%0D%0AMessage:'+message;

    const mailtoLink = 'mailto:nammadhu@outlook.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}';

    // Open the user's default email client
    window.location.href = mailtoLink;
    document.getElementById("contactUsEmailSendLink").href = mailtoLink;
}



function sendEmail() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    const queryType = formData.get('queryType');
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = `Contact Form Submission - ${queryType}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailtoLink = `mailto:vmadhu203@gemail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
}