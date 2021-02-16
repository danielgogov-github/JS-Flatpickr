// JS
let wrapper = document.querySelector('.wrapper');
let form = wrapper.querySelector('.form');
let inputFlatpickr = form.querySelector('.flatpickr');
let dateArray = null;

flatpickr('.flatpickr', {
    altInput: true,
    altFormat: "j F Y",    
    dateFormat: "d--m--Y",
    weekNumbers: true,
});

form.addEventListener('submit', (event) => {
    // event.preventDefault();
    // if(inputFlatpickr.value) {
    //     dateArray = inputFlatpickr.value.split('--');
    // }
    // console.log(dateArray);
    event.preventDefault();

    console.log(form.querySelector('.group').checked);

    // setTimeout(() => {
    //     form.submit();
    // }, 5000);
});

// Checkboxes
let allCheckboxes = form.querySelectorAll('input[type="checkbox"]');
allCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
        let group = event.target.parentNode;
        let hidden = group.querySelector('.hidden');
        let allGroupCheckboxes = group.querySelectorAll('input[type="checkbox"]');
        let allGroupCheckboxesChecked = group.querySelectorAll('input[type="checkbox"]:checked');

        if(allGroupCheckboxes.length === allGroupCheckboxesChecked.length) {
            hidden.style.visibility = 'visible';
        }else {
            hidden.style.visibility = 'hidden';
        }
    });
});
