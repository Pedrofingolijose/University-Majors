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
        for (let i = 1; i <= 9; i++) {
            inputs.push(document.getElementById(`input${i}`).value);
        }
    
       
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].toUpperCase() !== 'Y' && inputs[i].toUpperCase() !== 'N') {
                alert(`Invalid input at question ${i + 1}: Please enter 'Y' or 'N' only.`);
                return; 
            }
        }
    
       
        let indexValues = inputs.map(input => input.toUpperCase() === 'Y' ? 1 : 0);
    
      
        if (indexValues[6] === 1 && indexValues[8] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is a Lower\n\n since you have a critical and curiosity character!";
            popup.style.display = "block";
        } else if (indexValues[1] === 1 && indexValues[2] === 1 && indexValues[8] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is Business Managment\n\n since you have the ability to treat with problem, in addition to your social charecter!";
            popup.style.display = "block";
        } else if (indexValues[6] === 1 && indexValues[7] === 1 ) {
            document.getElementById('popupMessage').innerText = "Your precise major is financial \n\n since you have a critical thinking!";
            popup.style.display = "block";
        } else if (indexValues[1] === 1 && indexValues[4] === 1 && indexValues[6] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major Accounting\n\n due to your ability in critical thinking.";
            popup.style.display = "block";
        }else if (indexValues[1] === 1 && indexValues[2] === 1 && indexValues[3] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is Psycology \n\n due to your empathetical character!";
            popup.style.display = "block";
        } else {
            document.getElementById('popupMessage').innerText = "Your precise major is educational:\n Economics.\n\n sicology.\n\n some of humanities majors:\n Historical.\n\nGeographic.\n\nGraphical design.\n\nPhotography.\n\n since you are a social and communicative person";
            popup.style.display = "block";
        }
    
        console.log(indexValues);
    }
    

  









        