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
    event.preventDefault();

    if(inputFlatpickr.value) {
        dateArray = inputFlatpickr.value.split('--');
    }

    console.log(dateArray);
});

// Checkboxes
let allCheckboxes = form.querySelectorAll('.group');
let image = wrapper.querySelector('.image');

allCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        let allCheckboxesChecked = form.querySelectorAll('.group:checked');

        if(allCheckboxesChecked.length === allCheckboxes.length) {
            image.style.display = 'block';
        }else {
            image.style.display = 'none';
        }

        console.log(allCheckboxes.length);
        console.log(allCheckboxesChecked.length);        
    });
});
