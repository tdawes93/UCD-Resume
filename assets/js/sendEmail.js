function sendEmail(contactForm) {
    emailjs.send("tom_cv", "tom", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success!", response);
        }, 
        function(error) {
            console.log("Failure!", error);
        });
        return false;
}