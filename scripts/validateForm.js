const form = document.querySelector('#form');
let fields = Array.from(document.querySelectorAll('input'));

// validate form
function validateForm(event) {
    // validate each input field
    fields.forEach((field) => {
        let name = field.name;
        let id = field.id;
        let error = document.querySelector(`#${id}Err`);
        let isValid = field.validity.valid;
        // add error state on invalid input
        if (!isValid) {
            event.preventDefault();
            field.style.borderColor = 'red';
            field.style.background = 'url("images/icon-error.svg") no-repeat 98%';
            // display error messages
            error.textContent = "Please enter a valid " + name;
            if (field.validity.typeMismatch) error.textContent = "Looks like this is not an " + name;
            if (field.validity.valueMissing) error.textContent = name + " cannot be empty";
            if (field.validity.tooShort) error.textContent = name + " must be min " + field.getAttribute("minlength") + " characters";
            // change email placeholder on invalid input
            if (name = 'Email') {
                let email = document.querySelector('#email');
                email.placeholder = "email@example.com";
            }
        }
        // reset form on submit
        else {
            error.textContent = '.';
            field.style.borderColor = 'inherit';
            field.style.background = 'none';
        }
        // reset error state on field input
        field.oninput = function () {
            error.textContent = '.';
            field.style.borderColor = 'initial';
            field.style.background = 'none';
        }
    });
}

// validate form on submit
form.addEventListener('submit', validateForm);