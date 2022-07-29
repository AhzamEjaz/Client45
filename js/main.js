forms_ids = document.getElementById("forms-container").children
console.log(forms_ids);
function moveToNext(current_form_number){
    if(current_form_number == 1){
        turnOffForm('form-1')
        turnOnForm('form-2')
    }
    else if(current_form_number == 2){
        // form to be written
    }
}

function moveToPrevious(current_form_number){
    if(current_form_number == 2){
        turnOffForm('form-2')
        turnOnForm('form-1')
    }
    else if(current_form_number == 2){
        // form to be written
    }

}
function turnOffForm(form_id){
    forms_ids[form_id].style.display = "none";
}

function turnOnForm(form_id){
    forms_ids[form_id].style.display = "block";
}

