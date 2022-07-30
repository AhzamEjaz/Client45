forms_ids = document.getElementById("forms-container").children;
card_click_select = [0, 0, 0];

zip_input = document.getElementById("zip-code--input");
zip_input.addEventListener("keyup", function (event) {
  checkZipSize(event);
});

percentage_bar = document.getElementById('percent-complete');
percentage = 0;

function checkZipSize(event) {
  if (zip_input.value.length >= 5) {
    document.getElementById("zip-submit").disabled = false;
  } else if (zip_input.value.length < 5) {
    document.getElementById("zip-submit").disabled = true;
  }
}


function moveToNext(current_form_number) {

  form_number_to_turn_on = "form-" + (current_form_number+1).toString() ;
  turnOffForm();
  unhidePercentBar()

  turnOnForm(form_number_to_turn_on);
  if(current_form_number == 0 || current_form_number == 1){
  hidePercentBar();
  }

  setPercentBar(current_form_number)

}
function setPercentBar(current_form_num){
  percentage = ((current_form_num)/forms_ids.length) * 100 ;
  percentage_bar.innerHTML = percentage.toFixed(2) + "%";
  percentage_bar.style.width = percentage.toString() + "%";
}

function unhidePercentBar(){
  document.getElementById('completion-bar').style.display = 'flex';
}
function hidePercentBar(){
  document.getElementById('completion-bar').style.display = 'none';
}


function moveToPrevious(current_form_number) {

    form_number_to_turn_on = "form-" + (current_form_number-1).toString() ;
    turnOffForm();
    turnOnForm(form_number_to_turn_on);
    if(current_form_number == 3 || current_form_number == 2){
    hidePercentBar();
    }
}

// form turn on/off
function turnOffForm() {
  for (i = 0; i < forms_ids.length; i++) forms_ids[i].style.display = "none";
}

function turnOnForm(form_id) {
  forms_ids[form_id].style.display = "block";
}

function onCardClick(card_number) {
  if (card_number == 0) {
    document.getElementById("replace-card").classList.add("selected-card");

    document.getElementById("repair-card").classList.remove("selected-card");
    document.getElementById("construct-card").classList.remove("selected-card");
  } else if (card_number == 1) {
    document.getElementById("repair-card").classList.add("selected-card");

    document.getElementById("replace-card").classList.remove("selected-card");
    document.getElementById("construct-card").classList.remove("selected-card");
  } else if (card_number == 2) {
    document.getElementById("construct-card").classList.add("selected-card");

    document.getElementById("repair-card").classList.remove("selected-card");
    document.getElementById("replace-card").classList.remove("selected-card");
  }


  // screen-3
  else if (card_number == 3) {
    document.getElementById("cunsultant").classList.add("selected-card");

    document.getElementById("instant-quote").classList.remove("selected-card");
  } else if (card_number == 4) {
    document.getElementById("instant-quote").classList.add("selected-card");

    document.getElementById("cunsultant").classList.remove("selected-card");
  }

  // yess/no manage
  else if (card_number == 5) {
    document.getElementById("yes-1").classList.add("selected-card");

    document.getElementById("no-1").classList.remove("selected-card");
  } else if (card_number == 6) {
    document.getElementById("no-1").classList.add("selected-card");

    document.getElementById("yes-1").classList.remove("selected-card");
  }

  else if (card_number == 7) {
    document.getElementById("yes-2").classList.add("selected-card");

    document.getElementById("no-2").classList.remove("selected-card");
  } else if (card_number == 8) {
    document.getElementById("no-2").classList.add("selected-card");

    document.getElementById("yes-2").classList.remove("selected-card");
  }

  
  else if (card_number == 9) {
    document.getElementById("yes-3").classList.add("selected-card");

    document.getElementById("no-3").classList.remove("selected-card");
  } else if (card_number == 10) {
    document.getElementById("no-3").classList.add("selected-card");

    document.getElementById("yes-3").classList.remove("selected-card");
  }

}
