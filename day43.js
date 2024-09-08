let people = [
    {name:"Rohit Kumar",img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",bio:"Rohit is determined and motivated, constantly pushing himself to improve. He’s enthusiastic about tech and often volunteers to help fellow students with coding issues. He’s also known for his positive attitude and knack for motivating others.",status:"Stranger"},
    {name:"Priya Kumari",img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",bio:"Priya is creative, focused, and has a natural curiosity about new technologies. She is a problem solver who enjoys working on challenging projects and often leads her group assignments.",status:"Stranger"},
    {name:"Sumit Kumar",img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",bio:"Sumit is competitive but very approachable. He’s practical, and while he enjoys solving problems on his own",status:"Stranger"},
    {name:"Prem kumar",img:"https://images.unsplash.com/photo-1712425718855-5169714b3632?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"Stranger",bio:"Prem is sociable, charismatic, and a natural networker. He’s always up for a new challenge and enjoys organizing events and leading business-related group projects."}
];

var cluster = "";
people.forEach(function(val){
    cluster += `<div id="card">
            <img src="${val.img}" alt="rohit">
            <h4>${val.name}</h4>
            <p>${val.bio}</p>
            <h5 class="status">${val.status}</h5>
            <button>Add Friend</button>
        </div>`;
});
document.querySelector("#main").innerHTML = cluster;

let btns = document.querySelectorAll("button");
btns.forEach(function(btn, index) {
    let h5 = document.querySelectorAll(".status")[index];
    let flag = 0;
    
    btn.addEventListener("click", () => {
        if (flag === 0) {
            h5.innerHTML = "Friend";
            btn.innerHTML = "Remove Friend";
            h5.style.color = "green";
            flag = 1;
        } else {
            h5.innerHTML = "Stranger";
            btn.innerHTML = "Add Friend";
            h5.style.color = "black";
            flag = 0;
        }
    });
});
