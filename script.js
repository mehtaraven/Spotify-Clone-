console.log('Welcome to spotify')

//initialize the variables
let songIndex=0;
let audioelement= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Weak When ur Around" , filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Lucid Dreams" , filePath: "song/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Afterthought" , filePath: "song/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "All Girls Are The Same" , filePath: "song/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "The Wisp Sings" , filePath: "song/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Bazzi - Soarin" , filePath: "song/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Sad" , filePath: "song/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Space Song" , filePath: "song/8.mp3", coverPath:"covers/8.jpg"},
]
//audioElement.play   



//handle play pause click 
masterPlay.addEventListener('click',()=>{
    if (audioelement.paused || audioelement.currentTime <=0 ){
        audioelement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove("fa-circle-pause"); 
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})


//lsiten to events
audioelement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress= parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime=myProgressBar.value* audioelement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
}) 