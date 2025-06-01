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
        for (let i = 1; i <= 14; i++) {
            inputs.push(document.getElementById(`input${i}`).value);
        }
    
       
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].toUpperCase() !== 'Y' && inputs[i].toUpperCase() !== 'N') {
                alert(`Invalid input at question ${i + 1}: Please enter 'Y' or 'N' only.`);
                return;
            }
        }
    
       
        let indexValues = inputs.map(input => input.toUpperCase() === 'Y' ? 1 : 0);
    
       
        if (indexValues[1] === 1 && indexValues[4] === 1 && indexValues[7] === 1 && indexValues[8] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is BioMedical_Science\n\n since you are a lover working_Labs !";
            popup.style.display = "block";
        } else if (indexValues[1] === 1 && indexValues[6] === 1 && indexValues[7] === 1 && indexValues[9] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is nursing\n \n since you have the ability to treat with people, in addition to your social charecter!";
            popup.style.display = "block";
        } else if (indexValues[1] === 1 && indexValues[12] === 1 ) {
            document.getElementById('popupMessage').innerText = "Your precise major is optics \n since you treated eyes_working, in addition to your chill charecter in working!";
            popup.style.display = "block";
        } else if (indexValues[0] === 1 && indexValues[2] === 1 && indexValues[7] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major Surging\nNeurosurgery\n\nBrain Surgery or Cerebral Surgery\n\nOrthopedic Surgery.";
            popup.style.display = "block";
        }else if (indexValues[1] === 1 && indexValues[4] === 1 && indexValues[6] === 1&& indexValues[7] === 1 && indexValues[10] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is Dentist \n since you love working along ,with comfort hour_working!";
            popup.style.display = "block";
        }else if (indexValues[1] === 1 && indexValues[3] === 1 && indexValues[4] === 1&& indexValues[6] === 1 && indexValues[10] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is physical Therapiest \n due to your lovely character with people!";
            popup.style.display = "block";
        }else if (indexValues[1] === 1 && indexValues[4] === 1 && indexValues[10] === 1) {
            document.getElementById('popupMessage').innerText = "Your precise major is X_Ray Imaging \n due to your biological mindist!";
            popup.style.display = "block";
        } else {
            document.getElementById('popupMessage').innerText = "Your precise major is educational:\n (Biological.\n Physics.\n Chemistry.\n) \n since you are a social and communicative person, in addition to your ability in biological thinking!";
            popup.style.display = "block";
        }
    
        console.log(indexValues);
    }
    

  









        