
var popup = document.getElementById("customPopup");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    popup.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

function processInputs() {
    
        let inputs = [];
        for (let i = 1; i <= 10; i++) {
            inputs.push(document.getElementById(`input${i}`).value);
        }
    
     
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].toUpperCase() !== 'Y' && inputs[i].toUpperCase() !== 'N') {
                alert(`Invalid input at question ${i + 1}: Please enter 'Y' or 'N' only.`);
                return; 
            }
        }
    

        let indexValues = inputs.map(input => input.toUpperCase() === 'Y' ? 1 : 0);
    
        
        if (indexValues[2] === 1 && indexValues[3] === 1 && indexValues[7] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is mechanical and electrical engineering \n since you are a low social person, but you have an analytical mind!";
            popup.style.display = "block";
        } else if (indexValues[3] === 1 && indexValues[7] === 1 && indexValues[6] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is computer science and computer engineering \n since you have the ability to solve problems, in addition to your mathematical mind!";
            popup.style.display = "block";
        } else if (indexValues[0] === 1 && indexValues[1] === 1 && indexValues[4] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is architectural engineering \n since you are so creative, in addition to your analytical mind!";
            popup.style.display = "block";
        } else if (indexValues[5] === 1 && indexValues[8] === 1 && indexValues[9] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is petroleum or civil engineering \n since you attend to small details, in addition to your management of time!";
            popup.style.display = "block";
        } else {
            document.getElementById('popupMessage').innerText = "Your precise major is educational (Math, Physics, Chemistry) \n since you are a social and communicative person, in addition to your ability in critical thinking!";
            popup.style.display = "block";
        }
    
        console.log(indexValues);
    }
    

  









        