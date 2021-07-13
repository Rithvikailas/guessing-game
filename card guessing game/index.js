let cards=[
    {
    	image:"https://images.hdqwalls.com/wallpapers/garena-free-fire-z4.jpg",
    	value:1,
    	status:"closed"
    },
    {
    	image:"https://images.hdqwalls.com/wallpapers/garena-free-fire-z4.jpg",
    	value:1,
    	status:"closed"
    },
    {
    	image:"https://c4.wallpaperflare.com/wallpaper/993/587/751/video-game-clash-royale-wallpaper-preview.jpg",
    	value:2,
    	status:"closed"
    },
    {
    	image:"https://c4.wallpaperflare.com/wallpaper/993/587/751/video-game-clash-royale-wallpaper-preview.jpg",
    	value:2,
    	status:"closed"
    },
    {
    	image:"https://wallsdesk.com/wp-content/uploads/2016/05/Clash-Of-Clans-Wallpapers-HD.jpg",
    	value:3,
    	status:"closed"
    },
    {
    	image:"https://wallsdesk.com/wp-content/uploads/2016/05/Clash-Of-Clans-Wallpapers-HD.jpg",
    	value:3,
    	status:"closed"
    },
    {
    	image:"https://imagesbro.com/wp-content/uploads/2020/09/INDIAN_PUBG-07e2dfa8-98ac-40f5-b06b-0b6ec2ab3904-e1601128268877.jpg",
    	value:4,
    	status:"closed"
    },
    {
    	image:"https://imagesbro.com/wp-content/uploads/2020/09/INDIAN_PUBG-07e2dfa8-98ac-40f5-b06b-0b6ec2ab3904-e1601128268877.jpg",
    	value:4,
    	status:"closed"
    },
     {
    	image:"https://wallpapercave.com/wp/wp2315426.png",
    	value:5,
    	status:"closed"
    },
     {
    	image:"https://wallpapercave.com/wp/wp2315426.png",
    	value:5,
    	status:"closed"
    },
]

// DURNSTEN SHUFFLING ALGIRITHM

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);






let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();

        }

        
    }

    displayCards(cards);

}






