// 1 array, 4 objects inside, each object have the keys 'name/image/about'
// click button > cycle (checks each object in the array (specifically 'name') and looks for a match) 
//depending vvhich button vvas clicked, the number assigned to that hobby either -- or ++
//check to see if 1/4 and change to 4/1
//assign nevv values to html (and change classes)
let leftButton = document.querySelector(".button-left");
let rightButton = document.querySelector(".button-right");
let listOfHobbies = [
    {
        id: 1,
        name: "Drawing",
        image: "https://d2culxnxbccemt.cloudfront.net/craft/content/uploads/2020/08/04191531/drawing-style-001.jpg",
        about: "I don't consider myself an artist, but drawing is an efficient way to relax for me.",
        link: "https://www.allpastimes.com/drawing"
    },
    {
        id: 2,
        name: "Gardening",
        image: "https://worldofsucculents.com/wp-content/uploads/2016/12/How-to-Water-Succulents.jpg",
        about: "I consider gardening to be a rewarding hobby. Seeing the progress your plants make daily is motivating.",
        link: "https://greenerideal.com/guides/value-of-gardening-as-a-hobby/"

    },
    {
        id: 3,
        name: "Cooking",
        image: "https://28lmum2vtojcme2sq2p5zblo-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/how-cooking-became-my-creative-outlet-804x452.jpg",
        about: "placeholder",
        link: "https://www.discoverahobby.com/cooking"

    },
    {
        id: 4,
        name: "Creative Writing",
        image: "https://brewingwriter.com/wp-content/uploads/2022/02/Blog-Featured-Images-94.png",
        about: "placeholder",
        link: "https://brilliantio.com/writing-as-a-hobby/"

    }
];
leftButton.addEventListener("click", (e) => {
    let firstHobbyTitle = document.querySelector(".hobby-left-title").textContent;
    let secondHobbyTitle = document.querySelector(".hobby-right-title").textContent;
    leftButtonChange(firstHobbyTitle,"left")
    leftButtonChange(secondHobbyTitle,"right")
})

rightButton.addEventListener("click", (e) => {
    let firstHobbyTitle = document.querySelector(".hobby-left-title").textContent;
    let secondHobbyTitle = document.querySelector(".hobby-right-title").textContent;
    rightButtonChange(firstHobbyTitle,"left")
    rightButtonChange(secondHobbyTitle,"right")
})
function hobbyChange(numberTitle,direction,indexOfArray){
    numberTitle = listOfHobbies[indexOfArray].name;
    document.querySelector(`.hobby-${direction}-title`).textContent = numberTitle;
    document.querySelector(`.hobby-${direction}-info`).textContent = listOfHobbies[indexOfArray].about
    document.querySelector(`.hobby-${direction}-image`).src = listOfHobbies[indexOfArray].image
    document.querySelector(`.hobby-link-${direction}`).href = listOfHobbies[indexOfArray].link
}
function leftButtonChange(numberTitle,direction){
    for (let i = 0; i < listOfHobbies.length; i++) {
        if (numberTitle == listOfHobbies[i].name) {
            if (i == 0) {
                i = listOfHobbies.length - 1
                console.log(i)
            } else {
                i--
                console.log(i)
            }
            hobbyChange(numberTitle,direction,i)
            break;
        }
    }
}
function rightButtonChange(numberTitle,direction){
    for (let i = 0; i < listOfHobbies.length; i++) {
        if (numberTitle == listOfHobbies[i].name) {
            if (i == listOfHobbies.length - 1) {
                i = 0
                console.log(i)
            } else {
                i++
                console.log(i)
            }
            hobbyChange(numberTitle,direction,i)
            break;
        }
    }
}