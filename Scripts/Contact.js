(function(window) {
  linkToContact();

  linksToServices();

  validateForm();

  validateEmail();

  // submitForm();

  function linkToContact() {
    const linksContainer = document.querySelector(
      '.header-container .links-container'
    );
    const headerLinksDivs = [...linksContainer.querySelectorAll('div')];
    const contactLinkDiv = headerLinksDivs[headerLinksDivs.length - 1];
    contactLinkDiv.addEventListener('click', e => {
      e.preventDefault();
      const contactLink = contactLinkDiv.querySelector('a');
      window.location.href = '#Contact';
      contactLink.classList = 'active';
    });
  }

  function linksToServices() {
    const servicesRedirect = [...document.querySelectorAll('.content-services .rezerva')];
    servicesRedirect.forEach(element => {
      element.addEventListener('click', () => {
        window.location.href = "Servicii.html";
      })
    })
  }

  function validateForm() {
    const formContainer = document.querySelector(
      '.Contact-container .Contact-content .Contact-contentForm .ContactForm'
    );
    const inputs = [...formContainer.querySelectorAll('input')];
    function inputsRequired(inputs) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute('required', '');
      }
    }
    inputsRequired(inputs);
  }

  function validateEmail() {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailInput = document.querySelector('.ContactForm-Email');
    emailInput.pattern = mailFormat;
    emailInput.addEventListener('change', compareValue);
      function compareValue(e) {
      if (e.target.value == '' || !mailFormat.test(emailInput.value)) {
        e.target.setCustomValidity(' ');
        e.target.oninvalid = function(e) {
          if (!e.target.validity.valid) {
            e.target.setCustomValidity('Introduce-ti un email de forma exemplu@yahoo.com');
          } else {
            e.target.setCustomValidity(' ');
          }
        }
      }
    }
  }

  // function submitForm() {
  //   const submitButton = document.querySelector(
  //     '.Contact-container .Contact-content .Contact-contentForm .ContactForm .Contact-Submit button'
  //   );
  //   submitButton.addEventListener('click', validateEmail);
  // }
})(window);
