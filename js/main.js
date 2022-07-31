forms_ids = document.getElementById("forms-container").children;
card_click_select = [0, 0, 0];

zip_input = document.getElementById("zip-code--input");
zip_input.addEventListener("keyup", function (event) {
  checkZipSize(event);
});
current_form_number = 0;
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
  if (current_form_number == 1) {
    turnOffForm();
    setPercentBar(current_form_number)
    turnOnForm("form-2");
    hidePercentBar();
  } 
  else if (current_form_number == 2) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-3");

  }
  else if (current_form_number == 3) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-4");
  }
  else if (current_form_number == 4) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-5");

  }
  else if (current_form_number == 5) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-6");

  }
  else if (current_form_number == 6) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-7");

  }
  else if (current_form_number == 7) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-8");

  }
  else if (current_form_number == 8) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-9");
  }
  else if (current_form_number == 9) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-10");
  }
  else if (current_form_number == 10) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-11");
  }
  else if (current_form_number == 11) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-12");
  }
  else if (current_form_number == 12) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-13");
  }
  else if (current_form_number == 13) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-14");
  }
  else if (current_form_number == 14) {
    turnOffForm();
    setPercentBar(current_form_number)
    unhidePercentBar()
    turnOnForm("form-15");
  }

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

  // estimation cards
  else if(card_number == 11){
    document.getElementById("est-1").classList.add("selected-card");

    document.getElementById("est-2").classList.remove("selected-card");
    document.getElementById("est-3").classList.remove("selected-card");
    document.getElementById("est-4").classList.remove("selected-card");

  }
  else if(card_number == 12){
    document.getElementById("est-2").classList.add("selected-card");

    document.getElementById("est-1").classList.remove("selected-card");
    document.getElementById("est-3").classList.remove("selected-card");
    document.getElementById("est-4").classList.remove("selected-card");

  }
  else if(card_number == 13){
    document.getElementById("est-3").classList.add("selected-card");

    document.getElementById("est-2").classList.remove("selected-card");
    document.getElementById("est-1").classList.remove("selected-card");
    document.getElementById("est-4").classList.remove("selected-card");

  }
  else if(card_number == 14){
    document.getElementById("est-4").classList.add("selected-card");

    document.getElementById("est-2").classList.remove("selected-card");
    document.getElementById("est-3").classList.remove("selected-card");
    document.getElementById("est-1").classList.remove("selected-card");

  }

  // materials cards
  else if(card_number == 15){
    document.getElementById("mat-card-1").classList.add("selected-card");

    document.getElementById("mat-card-2").classList.remove("selected-card");
    document.getElementById("mat-card-3").classList.remove("selected-card");
    document.getElementById("mat-card-4").classList.remove("selected-card");
    document.getElementById("mat-card-5").classList.remove("selected-card");
    document.getElementById("mat-card-6").classList.remove("selected-card");
    document.getElementById("mat-card-7").classList.remove("selected-card");

  }
  else if(card_number == 16){
    document.getElementById("mat-card-2").classList.add("selected-card");

    document.getElementById("mat-card-1").classList.remove("selected-card");
    document.getElementById("mat-card-3").classList.remove("selected-card");
    document.getElementById("mat-card-4").classList.remove("selected-card");
    document.getElementById("mat-card-5").classList.remove("selected-card");
    document.getElementById("mat-card-6").classList.remove("selected-card");
    document.getElementById("mat-card-7").classList.remove("selected-card");

  }
  else if(card_number == 17){
    document.getElementById("mat-card-3").classList.add("selected-card");

    document.getElementById("mat-card-2").classList.remove("selected-card");
    document.getElementById("mat-card-1").classList.remove("selected-card");
    document.getElementById("mat-card-4").classList.remove("selected-card");
    document.getElementById("mat-card-5").classList.remove("selected-card");
    document.getElementById("mat-card-6").classList.remove("selected-card");
    document.getElementById("mat-card-7").classList.remove("selected-card");

  }
  else if(card_number == 18){
    document.getElementById("mat-card-4").classList.add("selected-card");

    document.getElementById("mat-card-2").classList.remove("selected-card");
    document.getElementById("mat-card-3").classList.remove("selected-card");
    document.getElementById("mat-card-1").classList.remove("selected-card");
    document.getElementById("mat-card-5").classList.remove("selected-card");
    document.getElementById("mat-card-6").classList.remove("selected-card");
    document.getElementById("mat-card-7").classList.remove("selected-card");

  }
  else if(card_number == 19){
    document.getElementById("mat-card-5").classList.add("selected-card");

    document.getElementById("mat-card-2").classList.remove("selected-card");
    document.getElementById("mat-card-3").classList.remove("selected-card");
    document.getElementById("mat-card-4").classList.remove("selected-card");
    document.getElementById("mat-card-1").classList.remove("selected-card");
    document.getElementById("mat-card-6").classList.remove("selected-card");
    document.getElementById("mat-card-7").classList.remove("selected-card");

  }
  else if(card_number == 20){
    document.getElementById("mat-card-6").classList.add("selected-card");

    document.getElementById("mat-card-2").classList.remove("selected-card");
    document.getElementById("mat-card-3").classList.remove("selected-card");
    document.getElementById("mat-card-4").classList.remove("selected-card");
    document.getElementById("mat-card-5").classList.remove("selected-card");
    document.getElementById("mat-card-1").classList.remove("selected-card");
    document.getElementById("mat-card-7").classList.remove("selected-card");

  }
  else if(card_number == 21){
    document.getElementById("mat-card-7").classList.add("selected-card");

    document.getElementById("mat-card-2").classList.remove("selected-card");
    document.getElementById("mat-card-3").classList.remove("selected-card");
    document.getElementById("mat-card-4").classList.remove("selected-card");
    document.getElementById("mat-card-5").classList.remove("selected-card");
    document.getElementById("mat-card-6").classList.remove("selected-card");
    document.getElementById("mat-card-1").classList.remove("selected-card");

  }

  else if (card_number == 22) {
    document.getElementById("yes-4").classList.add("selected-card");

    document.getElementById("no-4").classList.remove("selected-card");
  } else if (card_number == 23) {
    document.getElementById("no-4").classList.add("selected-card");

    document.getElementById("yes-4").classList.remove("selected-card");
  }

  // slopes
  else if (card_number == 25) {
    document.getElementById("flat-slope").classList.add("selected-card");
    document.getElementById("mid-slope").classList.remove("selected-card");
    document.getElementById("high-slope").classList.remove("selected-card");
    document.getElementById("not-sure-slope").classList.remove("selected-card");
  } else if (card_number == 26) {
    document.getElementById("flat-slope").classList.remove("selected-card");
    document.getElementById("mid-slope").classList.add("selected-card");
    document.getElementById("high-slope").classList.remove("selected-card");
    document.getElementById("not-sure-slope").classList.remove("selected-card");
  }
  else if (card_number == 27) {
    document.getElementById("flat-slope").classList.remove("selected-card");
    document.getElementById("mid-slope").classList.remove("selected-card");
    document.getElementById("high-slope").classList.add("selected-card");
    document.getElementById("not-sure-slope").classList.remove("selected-card");
  }
   else if (card_number == 28) {
    document.getElementById("flat-slope").classList.remove("selected-card");
    document.getElementById("mid-slope").classList.remove("selected-card");
    document.getElementById("high-slope").classList.remove("selected-card");
    document.getElementById("not-sure-slope").classList.add("selected-card");
  }

  // Quality
  else if (card_number == 29) {
    document.getElementById("quality-good").classList.add("selected-card");
    document.getElementById("quality-better").classList.remove("selected-card");
    document.getElementById("quality-best").classList.remove("selected-card");
    document.getElementById("quality-not-sure").classList.remove("selected-card");
  } else if (card_number == 30) {
    document.getElementById("quality-good").classList.remove("selected-card");
    document.getElementById("quality-better").classList.add("selected-card");
    document.getElementById("quality-best").classList.remove("selected-card");
    document.getElementById("quality-not-sure").classList.remove("selected-card");
  }
  else if (card_number == 31) {
    document.getElementById("quality-good").classList.remove("selected-card");
    document.getElementById("quality-better").classList.remove("selected-card");
    document.getElementById("quality-best").classList.add("selected-card");
    document.getElementById("quality-not-sure").classList.remove("selected-card");
  }
   else if (card_number == 32) {
    document.getElementById("quality-good").classList.remove("selected-card");
    document.getElementById("quality-better").classList.remove("selected-card");
    document.getElementById("quality-best").classList.remove("selected-card");
    document.getElementById("quality-not-sure").classList.add("selected-card");
  }

  // completion
  else if (card_number == 33) {
    document.getElementById("complete-Immediately").classList.add("selected-card");
    document.getElementById("complete-3").classList.remove("selected-card");
    document.getElementById("complete--3").classList.remove("selected-card");
    document.getElementById("complete-not-sure").classList.remove("selected-card");
  }

  else if (card_number == 34) {
    document.getElementById("complete-Immediately").classList.remove("selected-card");
    document.getElementById("complete-3").classList.add("selected-card");
    document.getElementById("complete--3").classList.remove("selected-card");
    document.getElementById("complete-not-sure").classList.remove("selected-card");
  }
  else if (card_number == 35) {
    document.getElementById("complete-Immediately").classList.remove("selected-card");
    document.getElementById("complete-3").classList.remove("selected-card");
    document.getElementById("complete--3").classList.add("selected-card");
    document.getElementById("complete-not-sure").classList.remove("selected-card");
  }
  else if (card_number == 36) {
    document.getElementById("complete-Immediately").classList.remove("selected-card");
    document.getElementById("complete-3").classList.remove("selected-card");
    document.getElementById("complete--3").classList.remove("selected-card");
    document.getElementById("complete-not-sure").classList.add("selected-card");
  }

  // ownerhsip
  else if (card_number == 37) {
    document.getElementById("yes-5").classList.add("selected-card");

    document.getElementById("no-5").classList.remove("selected-card");
  } else if (card_number == 38) {
    document.getElementById("no-5").classList.add("selected-card");

    document.getElementById("yes-5").classList.remove("selected-card");
  }

  // status
  else if (card_number == 39) {
    document.getElementById("status-hire").classList.add("selected-card");
    document.getElementById("status-plane").classList.remove("selected-card");
    document.getElementById("status-not-sure").classList.remove("selected-card");
    
  }
  else if (card_number == 40) {
    document.getElementById("status-hire").classList.remove("selected-card");
    document.getElementById("status-plane").classList.add("selected-card");
    document.getElementById("status-not-sure").classList.remove("selected-card");
    
  }
  else if (card_number == 41) {
    document.getElementById("status-hire").classList.remove("selected-card");
    document.getElementById("status-plane").classList.remove("selected-card");
    document.getElementById("status-not-sure").classList.add("selected-card");
    
  }

}
