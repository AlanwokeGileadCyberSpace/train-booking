function nameValidate(){
    const validateName = document.getElementById("nameInput");
    const userName = validateName.value.trim();
    // const nameInput = userName.value.trim();


    if(userName ==="" || /\d/.test(nameInput)){
        validateName.classList.add("Invalid-input")
        let nameError = document.getElementById("namError");
        nameError.textContent = "Enter your full name";
        nameError.style.color = "red"
    

    }else{
        validateName.classList.remove("Enter your full name");
        document.getElementById("namError").textContent = '';
        return true
    }

}
function tripdateChoice(){
    const tripValidate = document.getElementById("tripdate");
    let inputDate = tripValidate.value;

    if(inputDate ==="" ){
        tripValidate.classList.add("Invalid-input")
        let dateError = document.getElementById("dateError");
        dateError.textContent = "Please Enter date and time";
        dateError.style.color = "red"
    

    }else{
        tripValidate.classList.remove("Please Enter date and time");
        document.getElementById("dateError").textContent = '';
        return true
    }
}
function ageInput(){
    const userAge = document.getElementById("ageInput");
    let inputAge = userAge.value;

    if(inputAge ===""){
        userAge.classList.add("Invalid-input")
        let errorAge = document.getElementById("ageError");
        errorAge.textContent = " Please Select Age Category";
        errorAge.style.color = "red"
    

    }
    // else if(inputAge = 1){
    //     let userAge = document.getElementById("ageInput");
    //     userAge.textContent = (" An adult accompaniment is required, because you are a minor")

    else{
        userAge.classList.remove("Please-Select-Age-Category");
        document.getElementById("ageError").textContent = '';
        return true
    }

    
                
                    
            

    //     userAge.classList.remove("Invalid-input");
    //     document.getElementById("ageError").textContent = '';
    //     return true
}

//     }else if (){
//         if(userAge >= 1){
//             let userAge = document.getElementById("ageinput");
//             userAge.textContent = (" An adult accompaniment is required, because you are a minor")
        // }
// }

//     let trainList = ['Rail-Train 1', 'Rail-Train 2', 'Rail-Train 3', 'Rail-Train 4']
//     let trainChoice = {}
// function trainType(){
//     let sselectContainer = document.querySelector
// }
function validateDestination(){
    const destChoice = document.getElementById("destInputh");
    let inputDest =  destChoice.value;
    if(inputDest ===""){
        destChoice.classList.add("Invalid-input");
        let destinationError = document.getElementById("destinationError");
        destinationError.d
    }
}
function tripTypeChoice(){
    const tripType = document.getElementById("tripType");
    let tripInput = tripType.value;
    if(tripInput ===""){
        tripType.classList.add("Invalid-input")
        let tripError = document.getElementById("tripError");
        tripError.textContent = " Please Select Trip Type";
        tripError.style.color = "red";
    
            
    }else{
        tripValidate.classList.remove("Please Select Trip Type");
        document.getElementById("tripError").textContent = '';
        return true
    }

}
function trainChoice(){
    const trainSelect = document.getElementById("trainch");
    let choiceTrain = trainSelect.value;
    if(choiceTrain ===""){
        trainSelect.classList.add("Invalid-input")
        let chooseTrainError = document.getElementById("trainchError");
        chooseTrainError.textContent = "Please Select A Train"
        chooseTrainError.style.color = "red";

    }else{
        trainSelect.classList.remove("Please Select A Train");
        document.getElementById("trainchError").textContent = "";
        return true
    }
}
function trainService(){
    const userServive = document.getElementById("trainServe");
    let serviceInput = userServive.value;
    if(serviceInput ===""){
        userServive.classList.add("Invalid-input")
        let ServiceError = document.getElementById("serviceError");
        ServiceError.textContent = "Please select a train service"
        ServiceError.style.color = "red"
    }else{
        userServive.classList.remove("Please select a train service");
        document.getElementById("trainchError").textContent = "";
        return true
    }
}
// function 
function booking(){
    nameValidate();
    tripdateChoice();
    ageInput();
    validateDestination();
    tripTypeChoice();
    trainChoice();
    trainService();
    
if(booking() = true){
    let p = (`${userName} you have booked a trip to ${inputDest}, with the date and time setted for ${inputDate}, It is a ${tripInput}. You also selected ${choiceTrain},Therefore you are to pay 5000 for your trip`)
    console.log(alert(p))
}

}
    
