let user_score = 0;
let comuputer_socre = 0;

const choise = document.querySelectorAll('.choise')


const gencompchoice = () => {
    const   choice = ["rock" , "paper" , "scossor"]
    Math.floor(Math.random() * 10)

}

const playcomputer = (user_choice) =>{
    console.log("user choice: " + user_choice);

}


choise.forEach((choise) => {
    console.log(choise)
    choise.addEventListener('click', () =>{
        const user_choice = choise.getAttribute('id');
        // console.log("Choice was clicked" , choiceid);
        playcomputer(user_choice)
    })

})