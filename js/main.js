forms_ids = document.getElementById("forms-container").children;
card_click_select = [0, 0, 0];

document.getElementById('date-input').addEventListener('change',function(){
  document.getElementById('date-output').innerHTML = document.getElementById('date-input').value;
  document.getElementById('next-btn-date').disabled = false;
})
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

  form_number_to_turn_on = "form-" + (current_form_number+1).toString() ;
  turnOffForm();
  turnOnForm(form_number_to_turn_on);
  if(current_form_number == 3 || current_form_number == 2){
  hidePercentBar();
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
  console.log(form_id);
}

function onCardClick(card_number, form_number) {
  // document.getElementById("replace-card").classList.add("selected-card");
  card_id = "card-"+card_number.toString()+"-"+form_number.toString();
  console.log(card_id);
  document.getElementById(card_id).classList.add("selected-card");
}
