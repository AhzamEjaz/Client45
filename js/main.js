forms_ids = document.getElementById("forms-container").children;
card_click_select = [0, 0, 0];


name_field = document.getElementById("name");
phone = document.getElementById("phone_number");
email = document.getElementById("email_address");

address_1 = document.getElementById("address-1");
address_2 = document.getElementById("address-2");


// name_field.addEventListener("emptied", infoDisable);
infoFormEventListners();
addressFormEventLisner()
document.getElementById('date-input').addEventListener('change', function () {
  document.getElementById('date-output').innerHTML = document.getElementById('date-input').value;
  document.getElementById('date-output-1').innerHTML = document.getElementById('date-input').value;
  document.getElementById('next-btn-date').disabled = false;
})
zip_input = document.getElementById("zip-code--input");
zip_input.addEventListener("keyup", function (event) {
  checkZipSize(event);
});

current_form_number = 0;

function infoFormEventListners() {


  name_field.addEventListener("focus", infoEnable);
  phone.addEventListener("focus", infoEnable);
  email.addEventListener("focus", infoEnable);

  name_field.addEventListener("keyup", infoEnable);
  phone.addEventListener("keyup", infoEnable);
  email.addEventListener("keyup", infoEnable);

}

function addressFormEventLisner(){

  address_1.addEventListener("focus", addressEnable);
  address_2.addEventListener("focus", addressEnable);

  address_1.addEventListener("keyup", addressEnable);
  address_2.addEventListener("keyup", addressEnable);

}

function addressEnable(){
  if (address_1.value && address_2.value) {
    document.getElementById("d-in").disabled = false;
  }
  else {
    document.getElementById("d-in").disabled = true;
  }
}
function infoEnable() {
  if (name_field.value && phone.value && email.value) {
    document.getElementById("d-me").disabled = false;
  }
  else {
    document.getElementById("d-me").disabled = true;
  }
}

function checkZipSize(event) {
  if (zip_input.value.length >= 5) {
    document.getElementById("zip-submit").disabled = false;
  } else if (zip_input.value.length < 5) {
    document.getElementById("zip-submit").disabled = true;
  }
}

function moveToNext(current_form_number) {

  form_number_to_turn_on = "form-" + (current_form_number + 1).toString();
  turnOffForm();
  turnOnForm(form_number_to_turn_on);
}


function moveToPrevious(current_form_number) {

  form_number_to_turn_on = "form-" + (current_form_number - 1).toString();
  turnOffForm();
  turnOnForm(form_number_to_turn_on);
}

// form turn on/off
function turnOffForm() {
  for (i = 0; i < forms_ids.length; i++) {
    forms_ids[i].style.display = "none";
  }
}

function turnOnForm(form_id) {
  forms_ids[form_id].style.display = "block";
}

function onCardClick(card_number, form_number) {
  // document.getElementById("replace-card").classList.add("selected-card");
  card_id = "card-" + card_number.toString() + "-" + form_number.toString();
  document.getElementById(card_id).classList.add("selected-card");
  removeSelectedCard(card_number, form_number);
}

function removeSelectedCard(card_number, form_number) {
  card_id_list = getListOfIDs(form_number);
  current_card_id = "card-" + card_number.toString() + "-" + form_number.toString();
  pointer_id = "";
  for (i = 0; i < card_id_list.length; i++) {
    pointer_id = "";
    pointer_id = card_id_list[i];

    if (pointer_id == current_card_id) {
      // ignore
    } else {
      document.getElementById(pointer_id).classList.remove("selected-card");
    }
  }
}

function getListOfIDs(form_id) {
  card_id_list = [];
  card_id = "";
  card_id_obj = "";
  for (i = 1; i < 10; i++) {
    card_id = "card-" + i.toString() + "-" + form_id.toString();
    card_id_obj = document.getElementById(card_id);
    if (card_id_obj) {
      card_id_list.push(card_id);
    }
    else {
      break;
    }
  }
  return card_id_list;
}

function timeSelect(time_select_id) {
  if (time_select_id == 1) {
    document.getElementById("time-output").innerHTML = "8:00 am-10:00 am";
  }
  else if (time_select_id == 2) {
    document.getElementById("time-output").innerHTML = "10:00 am-12:00 pm";
  }
  else if (time_select_id == 3) {
    document.getElementById("time-output").innerHTML = "12:00 pm-2:00 pm";
  }
  else if (time_select_id == 4) {
    document.getElementById("time-output").innerHTML = "4:00 pm-6:00 pm";
  }

  document.getElementById("schedule-cons").disabled = false;
}