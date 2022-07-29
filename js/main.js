forms_ids = document.getElementById("forms-container").children
card_click_select = [0, 0, 0]

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


function onCardClick(card_number) {
  console.log(card_number);
  if(card_number==0){
    
    document.getElementById("replace-card").classList.add("selected-card")

    document.getElementById("repair-card").classList.remove("selected-card")
    document.getElementById("construct-card").classList.remove("selected-card")

  }
  else if(card_number==1){
    document.getElementById("repair-card").classList.add("selected-card")

    document.getElementById("replace-card").classList.remove("selected-card")
    document.getElementById("construct-card").classList.remove("selected-card")

  }
  else if(card_number==2){
    document.getElementById("construct-card").classList.add("selected-card")

    document.getElementById("repair-card").classList.remove("selected-card")
    document.getElementById("replace-card").classList.remove("selected-card")

  }

}