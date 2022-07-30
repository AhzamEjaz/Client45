forms_ids = document.getElementById("forms-container").children
card_click_select = [0, 0, 0]

zip_input = document.getElementById('zip-code--input')
zip_input.addEventListener('keyup', function(event){
  checkZipSize(event)
});

console.log(forms_ids);

function checkZipSize(event){
  if(zip_input.value.length >= 5){
    document.getElementById('zip-submit').disabled = false;
  }
  else if(zip_input.value.length < 5){
    document.getElementById('zip-submit').disabled = true;
  }

}

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