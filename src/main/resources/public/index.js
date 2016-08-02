'use strict';

const controller = (function(){

  function getAll() {
    request.getAllfromDatabase(function(response) {
      display.showAll(JSON.parse(response));
    })
  }

  function getbyfilter() {
    display.hiddenfilter()
    if (inputdate.value !==''){
      let filter = inputdate.value.substring(0,10);
      request.getFilterfromDatabase(filter,function(response) {
        display.filter(response);
        inputdate.value = "";
      })
    }
  }

  function back() {
    let addScreen = document.querySelector('.add_cointainer');
    let input = document.querySelector('.date_input');
    if (!addScreen.classList.contains('hidden')){
      display.hiddenAdd()
    } else if (!input.classList.contains('hidden')) {
        display.hiddenfilter()
    }
  }


  function confirm() {
    if (inputtext.value !=='' && inputcal.value !=='' && inputdate.value !==''){
      addNewElement();
    } else if (inputdate.value !=='') {
       getbyfilter();
    }
  }

  function showAll() {
    display.deleteAll();
    getAll();
  }

  function addNewElement(){
    request.addElementDatabase(JSON.stringify(domMovements.getInputData()),function(response) {
    display.showNew(response,domMovements.getInputData())
    display.hiddenAdd()
    inputtext.value = ''
    inputcal.value =''
    inputdate.value =''
      }
    )
  }

  function sum(){
    var allLi= document.querySelectorAll('li');
    var total = 0
    for (let i = 0; i < allLi.length; i++) {
    total +=parseInt(allLi[i].dataset.calories);
    }
    create.createSum(total)
  }

  function deleteElement(event) {
    if (lastId && display.confirmWindow()) {
      request.deleteElement((lastId),function(response) {
        if ("ok" === JSON.parse(response).status){
          display.deleteMeal(lastId)
        };
      })
    }
  }

  return {
    getAll,
    getbyfilter,
    showAll,
    addNewElement,
    deleteElement,
    sum,
    confirm,
    back,
  };
}());

controller.getAll()
