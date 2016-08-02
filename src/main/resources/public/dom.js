'use strict';
const addButton = document.querySelector('.add_button');
const deleteButton = document.querySelector('.delete_button');
const filterButton = document.querySelector('.filter_button');
const showAllButton = document.querySelector('.show_button');
const confirmButton = document.querySelector('.confirm_button');
const backButton = document.querySelector('.back_button');
const inputtext = document.querySelector('.text_input');
const inputcal = document.querySelector('.calories_input');
const inputdate = document.querySelector('.date_input');
const filterdate = document.querySelector('filter_input');
var deleteLine = document.querySelector('ul');

addButton.addEventListener('click', display.hiddenAdd);
deleteButton.addEventListener('click', controller.deleteElement);
filterButton.addEventListener('click', display.hiddenfilter);
showAllButton.addEventListener('click', controller.showAll);
confirmButton.addEventListener('click', controller.confirm);
backButton.addEventListener('click', controller.back);

var lastId;

const domMovements = (function(){
  deleteLine.addEventListener('click', findRow);
  function findRow(event) {
    if ((typeof((event.target).parentNode.dataset.id)) !== 'undefined') {
      lastId = (event.target).parentNode.dataset.id
    } else {
      lastId = (event.target).dataset.id
    }
    display.selectMeal(lastId)
    return lastId
  }

  function getInputData() {
    console.log((inputdate.value));
    let data = {
      name: inputtext.value,
      calories: inputcal.value,
      date: inputdate.value,
    };
    return data;
  }

  return {
    findRow,
    getInputData,
  };
}());
