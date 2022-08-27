function validate(){
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let zipInput = document.getElementById('zip').value
    let tnCInput = document.getElementById('tnC').checked

    let error = false

    //for first name
    if(firstNameInput.length >= 1){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
    }

    //for last name
    if(lastNameInput.length >= 1){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
    }

    // for email
    // -if exists
    // -@
    // -.
    // -after last dot(.),there should be atleast 2 characters 
    //after @gmail.com is invalid (first character can not be @)
    if(emailInput && 
        emailInput.includes('@') && 
        emailInput.indexOf('@')!=0 && 
        emailInput.includes('.') && 
        (emailInput.lastIndexOf('.') <= emailInput.length -3)){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }

    //for city
    if(cityInput.length >= 3){
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    }
    else{
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
        error = true
    }

    //for state
    if(stateInput !== 'Select State...'){
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    }
    else{
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
        error = true
    }

    //for zip
    if(zipInput.length === 6 && !isNaN(parseInt(zipInput))){
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    }
    else{
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none'
        error = true
    }

    //for T&C
    if(tnCInput){
        document.getElementById('tnC-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnC-invalid').style.display = 'block'
        error = true
    }

    if(!error){
        alert('Your form is submitted successfully!')
        document.getElementById('first-name').value=''
        document.getElementById('last-name').value=''
        document.getElementById('email').value=''
        document.getElementById('city').value=''
        document.getElementById('state').value='Select State...'
        document.getElementById('zip').value=''
        document.getElementById('tnC').checked=false

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('city-valid').style.display = 'none'
        document.getElementById('state-valid').style.display = 'none'
        document.getElementById('zip-valid').style.display = 'none'
    }
}
