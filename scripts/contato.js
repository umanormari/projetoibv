const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formIsValid = true;
    formIsValid &= nameValidate();
    formIsValid &= celularValidate();
    formIsValid &= emailValidate();
    formIsValid &= cityValidate();
    formIsValid &= regionValidate();

    if (formIsValid) {
        form.submit();
    }
});

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if (campos[0].value.length < 3) {
        setError(0);
        return false;
    } else {
        removeError(0);
        return true;
    }
}

function celularValidate(){
    if (campos[1].value.length != 11 || isNaN(campos[1].value)) {
        setError(1);
        return false;
    } else {
        removeError(1);
        return true;
    }
}

function emailValidate(){
    if (!emailRegex.test(campos[2].value)) {
        setError(2);
        return false;
    } else {
        removeError(2);
        return true;
    }
}

function cityValidate(){
    if (campos[3].value.length < 1) {
        setError(3);
        return false;
    } else {
        removeError(3);
        return true;
    }
}

function regionValidate(){
    if (campos[4].value === "") {
        setError(4);
        return false;
    } else {
        removeError(4);
        return true;
    }
}
