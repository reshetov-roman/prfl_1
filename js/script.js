class Profile {
  constructor(selectGender,accordeonCheckBoxes,setIdAccordeonFields,popupFormField,popupFormFieldValid, personalFieldForm,mainFormClear) {
    this.selectGender = document.querySelectorAll(selectGender);
    this.accordeonCheckBoxes = document.querySelectorAll(accordeonCheckBoxes);
    this.setIdAccordeonFields = document.querySelectorAll(setIdAccordeonFields);
    this.popupFormField = document.querySelectorAll(popupFormField);
    this.popupFormFieldValid = document.querySelectorAll(popupFormFieldValid);
    this.personalFieldForm = document.querySelectorAll(personalFieldForm);
    this.mainFormClear = mainFormClear = document.querySelector(mainFormClear);
  }

  maskednput() {
    $("#phone").mask("8(999) 999-9999");
    $('#date').mask('99.99.9999');
  }

  setIdGender() {
    if(this?.selectGender) {
      this.selectGender.forEach((radio, i) => {
        radio.id = `sex_${i}`;
        radio.nextElementSibling.setAttribute('for', `sex_${i}`);
      });
    }
  }

  accordeon() {
    if(this?.accordeonCheckBoxes && this?.setIdAccordeonFields) {
      this.accordeonCheckBoxes.forEach(checkBox => {
        checkBox.addEventListener('click', e => {
          const target = e.target;
          target.classList.toggle('revorse');
          target.nextElementSibling.classList.toggle('show');
        });
      });

      this.setIdAccordeonFields.forEach((radio, i) => {
        radio.querySelector('.page-profile-wrapper__forms-notifications--checkbox').id = `checked_${i}`;
        let label = radio.querySelector('.page-profile-wrapper__forms-notifications--text');
            label.setAttribute('for', `checked_${i}`);
      });
    }
  }

  popUpForm() {
    if(this?.popupFormField && this?.popupFormFieldValid) {
      this.popupFormField.forEach(field => {
        field.addEventListener('click', e => {
          const target = e.target;
          target.classList.toggle('hide');
          const type = target.parentNode.querySelector('.page-profile-wrapper__forms-security--fld');
          type.type === 'password' ? type.type = 'text' : type.type = 'password';
        });
      });

      this.popupFormFieldValid.forEach(input => {
        input.addEventListener('input',() => {
      
          let currentPass = document.getElementById('currentPass').value,
              newPass = document.getElementById('newPass').value,
              repeatPass = document.getElementById('repeatPass').value,
              buttonChange = document.querySelector('.buttonChange'),
              activeError = document.querySelector('.page-profile-wrapper__forms-security--error');

          if(currentPass.length != 0 && newPass.length != 0
          && repeatPass.length != 0 && newPass == repeatPass
          && newPass != '' && repeatPass != '') {
            buttonChange.removeAttribute('disabled');
            buttonChange.classList.add('active');
          } else {
            buttonChange.setAttribute('disabled', '');
            buttonChange.classList.remove('active');
          }
          newPass != repeatPass || repeatPass != newPass ?
          activeError.classList.add('error') : 
          activeError.classList.remove('error');
        });
      });
    }
  }

  personalFormValid() {
    if(this?.personalFieldForm) {
      this.personalFieldForm.forEach(field => {
        field.addEventListener('input', () => {
          let name = document.querySelector('[data-name]').value,
              surName = document.querySelector('[data-sur-name]').value,
              secondName = document.querySelector('[data-second-name]').value,
              email = document.querySelector('[data-email]').value,
              mobile = document.querySelector('[data-mobile]').value,
              birth = document.querySelector('[data-birth]').value,
              man = document.querySelector('[data-checked-man]'),
              woman = document.querySelector('[data-checked-woman]'),
              buttonChange = document.querySelector('.page-profile-wrapper__forms-personal--save');
          
      
              if(name.length != 0 && surName.length != 0 && secondName.length != 0 && secondName.length != 0 && email.length != 0) {
                if(man.checked || woman.checked) {
                  buttonChange.disabled = false;
                  buttonChange.classList.add('active');
                  buttonChange.parentNode.classList.add('active');
                }
                  }
                else {
                  buttonChange.disabled = true;
                  buttonChange.classList.remove('active');
                  buttonChange.parentNode.classList.remove('active');
              }
        });
      });
    }
  }

  popupFormValid() {

  const backdrop = document.querySelector('#modal-backdrop'),
  backdropField = document.querySelectorAll('[data-clear-field]');
  document.addEventListener('click', modalHandler);


  function modalHandler(evt) {
    const modalBtnOpen = evt.target.closest('.js-modal');
    if (modalBtnOpen) {
      const modalSelector = modalBtnOpen.dataset.modal;
      showModal(document.querySelector(modalSelector));
    }

    const modalBtnClose = evt.target.closest('.modal-close');
    if (modalBtnClose) {
      evt.preventDefault();
      hideModal(modalBtnClose.closest('.modal-window'));
      backdropField.forEach(elm => { elm.value = ''; });
    }

    if (evt.target.matches('#modal-backdrop')) {
      hideModal(document.querySelector('.modal-window.show'));
    }
  }

  function showModal(modalElem) {
    modalElem.classList.add('show');
    backdrop.classList.remove('hidden');
  }

  function hideModal(modalElem) {
    modalElem.classList.remove('show');
    backdrop.classList.add('hidden');
  }

  }

  popupFieldsClear() {
  const clearFields = document.querySelectorAll('[data-clear]'),
  buttons = document.querySelector('.page-profile-wrapper__forms-personal--buttons');
  this.mainFormClear.addEventListener('click', () => {
    clearFields.forEach(field => {
      field.value = '';
      buttons.classList.remove('active');
    });
  });
  }

}

const exlempProfile = new Profile(
  '.page-profile-wrapper__forms-personal--sex input[type="radio"]',
  '.page-profile-wrapper__forms-notifications--headline',
  '.page-profile-wrapper__forms-notifications--checkboxes',
  '.page-profile-wrapper__forms-security--eye',
  '.page-profile-wrapper__forms-security--fld',
  '.page-profile-wrapper__forms-personal--for input',
  '.page-profile-wrapper__forms-personal--cancel'
); 

exlempProfile.maskednput();
exlempProfile.setIdGender();
exlempProfile.accordeon();
exlempProfile.popUpForm();
exlempProfile.personalFormValid();
exlempProfile.popupFormValid();
exlempProfile.popupFieldsClear();

///////////////////////////////////



