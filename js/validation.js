// Wait for the DOM to be ready
$(function() {
alert('fdfd');
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='myForm']").validate({
    // Specify validation rules
    rules: {
       q1: { 
            required: true
        }      
    },
 }
      },
});
});