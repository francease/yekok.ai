// script.js

const stringArray = ["Sure nana?", "Dili jd diay?", "Last na if pwde mahangyo", "Bahala ka"];
let noCtr = 0;


//Overall function of script
function moveFunction(noStringBtn, containerString, yesStringBtn, alertTxt, nxtWebpage){

    const noButton = document.querySelector(noStringBtn);
    const container = document.querySelector(containerString);
    const yesButton = document.querySelector(yesStringBtn); //'yesButton'

    noButton.addEventListener('click', () => {
        displayArrayContents()

        const randomX = Math.floor(Math.random() * (window.innerWidth - 900));
        const randomY = Math.floor(Math.random() * (window.innerHeight - 900));

        container.style.left = `${randomX}px`;
        container.style.top = `${randomY}px`;
        
        noCtr += 1;

        if(noCtr == 4){
            noButton.addEventListener('mouseover', () => {
                const randomX = Math.floor(Math.random() * (window.innerWidth - 900));
                const randomY = Math.floor(Math.random() * (window.innerHeight - 900));
            
                container.style.left = `${randomX}px`;
                container.style.top = `${randomY}px`;
                
            });
        }
    
    //Action once yes button is clicked

        
});
    yesButton.addEventListener('click', () => {
        noCtr = 0; //Reset ctr
        window.alert(alertTxt)
        window.location.href = nxtWebpage; // Replace with your desired URL
    });


}

moveFunction('.noButton', '.container','.yesButton', "He likes you too!", 'home3.html')


//Displays label with context
function displayArrayContents() {
        document.getElementById('labelString').innerHTML = stringArray[noCtr]

}



