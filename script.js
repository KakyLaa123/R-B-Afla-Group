let radioFirstPlan = document.getElementById("first-plan");
let radioSecondPlan = document.getElementById("second-plan");
let radioThirdPlan = document.getElementById("third-plan");
let totalPrice = document.getElementById("total");
let selectedPlan = document.getElementById("number-of-plan");
selectedPlan.textContent = "";
let selectHowMany = document.querySelector("select");
let licenseBuy = document.querySelectorAll(".license");
let radioBorder = document.querySelectorAll('.radio-border');
let radioCheck = document.querySelectorAll('.radio-check');

function getTheFirstPlan(){
    radioFirstPlan.addEventListener('focus', function(){
        selectedPlan.textContent = " #1";
        totalPrice.textContent = radioFirstPlan.value;
        selectHowMany.addEventListener('change', function(){
            totalPrice.textContent = radioFirstPlan.value * selectHowMany.value;
        });
        totalPrice.textContent = radioFirstPlan.value * selectHowMany.value;
        licenseBuy[0].classList.add('selected-plan-price');
        licenseBuy[1].classList.remove('selected-plan-price');
        licenseBuy[2].classList.remove('selected-plan-price');
        radioBorder[0].classList.add('radio-border-checked');
        radioCheck[0].classList.add('radio-check-checked');
        radioBorder[1].classList.remove('radio-border-checked');
        radioCheck[1].classList.remove('radio-check-checked');
        radioBorder[2].classList.remove('radio-border-checked');
        radioCheck[2].classList.remove('radio-check-checked');
    });
}

getTheFirstPlan(); 

function getTheSecondPlan(){
    radioSecondPlan.addEventListener('focus', function(){
        selectedPlan.textContent = " #2";
        totalPrice.textContent = radioSecondPlan.value;
        selectHowMany.addEventListener('change', function(){
            totalPrice.textContent = radioSecondPlan.value * selectHowMany.value;
        });
        totalPrice.textContent = radioSecondPlan.value * selectHowMany.value;
        licenseBuy[0].classList.remove('selected-plan-price');
        licenseBuy[1].classList.add('selected-plan-price');
        licenseBuy[2].classList.remove('selected-plan-price');
        radioBorder[0].classList.remove('radio-border-checked');
        radioCheck[0].classList.remove('radio-check-checked');
        radioBorder[1].classList.add('radio-border-checked');
        radioCheck[1].classList.add('radio-check-checked');
        radioBorder[2].classList.remove('radio-border-checked');
        radioCheck[2].classList.remove('radio-check-checked');
    });
}

getTheSecondPlan();

function getTheThirdPlan(){
    radioThirdPlan.addEventListener('focus', function(){
        selectedPlan.textContent = " #3";
        totalPrice.textContent = radioThirdPlan.value;
        selectHowMany.addEventListener('change', function(){
            totalPrice.textContent = radioThirdPlan.value * selectHowMany.value;
        });
        totalPrice.textContent = radioThirdPlan.value * selectHowMany.value;
        licenseBuy[0].classList.remove('selected-plan-price');
        licenseBuy[1].classList.remove('selected-plan-price');
        licenseBuy[2].classList.add('selected-plan-price');
        radioBorder[0].classList.remove('radio-border-checked');
        radioCheck[0].classList.remove('radio-check-checked');
        radioBorder[1].classList.remove('radio-border-checked');
        radioCheck[1].classList.remove('radio-check-checked');
        radioBorder[2].classList.add('radio-border-checked');
        radioCheck[2].classList.add('radio-check-checked');
    });
}

getTheThirdPlan();