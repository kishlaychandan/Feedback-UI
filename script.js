let main=document.querySelector(".main");
let card=document.querySelectorAll(".card");
let feedback=document.querySelector(".feedback");
console.log(card);
let colors = [
    "#fedcba", "#0000ff", "#3f3fff", "#abcdef",
    "#181716", "#009c4a", "#451800", "#849974",
    "#c0ff00", "#c6e2ff", "#fbc6da", "#00ff00", "#6600cc", "#ff99cc", "#336699"
];



let lastClickedCard = null;
let selectedFeedback =null;
card.forEach((ele)=>{
// console.log();
ele.addEventListener("click",()=>{
    if (lastClickedCard && lastClickedCard !== ele) {
        lastClickedCard.style.backgroundColor = "";
    }
    ele.style.backgroundColor="pink"
    lastClickedCard=ele;
    selectedFeedback=ele.querySelector(".text1").textContent;
    // console.log(name.textContent);

    let submit=document.querySelector(".submit");
    submit.addEventListener("click",()=>{
        let new_div=document.createElement(`div`);
        new_div.className="content";
        new_div.innerHTML=`
            <h1>Thank You!</h1>
            <h1>Feedback: ${selectedFeedback}</h1>
            <p>We'll use your feedback to improve our customer support.</p>
        `;
        feedback.appendChild(new_div);
        main.style.display="none";

        setInterval(()=>{
            let random=Math.floor(Math.random()*colors.length);
            let random1=Math.floor(Math.random()*colors.length);
            if(random!=random1){
                new_div.style.backgroundColor=colors[random];
                new_div.style.color=colors[random1];
            }
        },2000)
    });
});
});
