const songs=[
    {
        title: "Ajeeb Dastaan",
        artist: "Lata Mangeshkar",
        musicImage: "1",
        name: "khushi1"
    },
    {
        title: "Roz",
        artist: "Ritviz and Nucleya",
        musicImage: "2",
        name: "khushi2"
    },
    {
        title: "Rang Sharbato ka",
      artist: "Atif Aslam",
        musicImage: "3",
        name: "khushi3"
    },
    {
        title: "Dekha ek khwab",
       artist: "Kishore Kumar",
        musicImage: "4",
        name: "khushi4"
    },
    {
        title: "Channa ve",
        artist: "Akhil Sachdeva",
        musicImage: "5",
        name: "khushi5"
    },
    {
        title: "Ghulmil Ghulmil",
        artist: "Sukhwiner Singh",
        musicImage: "10",
        name: "khushi6"
    },
    {
        title: "Aur kya chahiye",
        artist: "Arijit Singh",
        musicImage: "6",
        name: "khushi7"
    },
    {
        title: "Kal kya pata",
        artist: "Sukhwiner Singh",
        musicImage: "9",
        name: "khushi8"
    },
]

const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const music = document.querySelector("audio");
const musicimg = document.querySelector(".musicImage");
const title = document.getElementById("title");
// const song = document.getElementById(".music");
const artist = document.getElementById("artist");
const main = document.querySelector(".main");

let isplaying = false;

//for play functionality
const playMusic = ()=>{


    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    musicimg.classList.add("anime")

}
//for pause functionality
const pauseMusic = ()=>{


    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    musicimg.classList.remove("anime")

}
play.addEventListener("click", function () {
    if (isplaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
    gsap.to(".box h1", {
        opacity: 1,
        duration: 1
    })
    gsap.to(".box h3", {
        opacity: 1,
        duration: 1.5
    })
    gsap.to(".box div.musicImage", {
        opacity: 1,
        duration: 2
    })
    gsap.to("audio", {
        opacity: 1,
        duration: 2.4
    })
})
//changing music data

const loadSong=(songs,index)=>{
    title.textContent=songs[index].title;
    artist.textContent=songs[index].artist;
    music.src=songs[index].name+".mp3";
    musicimg.style.backgroundImage="url("+songs[index].musicImage+".jpg)";
    main.backgroundImage=songs.musicImage+".jpg";
    gsap.to(".box h1", {
        opacity: 1,
        duration: 1
    })
    gsap.to(".box h3", {
        opacity: 1,
        duration: 1.5
    })
    gsap.to(".box div.musicImage", {
        opacity: 1,
        duration: 2
    })
    gsap.to("audio", {
        opacity: 1,
        duration: 2.4
    })
    
}
// loadSong(songs,3);

songIndex=0;

const nextSong=()=>{
songIndex=(songIndex+1)%songs.length;
    loadSong(songs,songIndex);
    playMusic();
    gsap.to(".box h1", {
        opacity: 1,
        duration: 1
    })
    gsap.to(".box h3", {
        opacity: 1,
        duration: 1.5
    })
    gsap.to(".box div.musicImage", {
        opacity: 1,
        duration: 2
    })
    gsap.to("audio", {
        opacity: 1,
        duration: 2.4
    })
    
}
const prevSong=()=>{
// songIndex=(songIndex+1)%songs.length;
songIndex=(songIndex-1+songs.length)%songs.length;
    loadSong(songs,songIndex);
playMusic();
gsap.to(".box h1", {
    opacity: 1,
    duration: 1
})
gsap.to(".box h3", {
    opacity: 1,
    duration: 1.5
})
gsap.to(".box div.musicImage", {
    opacity: 1,
    duration: 2
})
gsap.to("audio", {
    opacity: 1,
    duration: 2.4
})

}
// 
next.addEventListener("click",nextSong)
prev.addEventListener("click",prevSong)
