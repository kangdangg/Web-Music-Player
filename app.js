const music = new Audio('audio/8.mp3')
//music.play();


const songs = [
    {
        id: 1,
        songName: `TOKYO DRiFT <br> 
        <div class="subtitle">below!</div>`,
        poster : "img/1.jpg "
    },
    {
        id: 2,
        songName: ` Roses - Imanbek Remix <br> 
        <div class="subtitle">SAINt JHN,Imanbrk</div>`,
        poster : "img/2.jpg "
    },
    {
        id: 3,
        songName: `Violet <br> 
        <div class="subtitle">Connor Price</div>`,
        poster: "img/3.jpg "
    },
    {
        id: 4,
        songName: `BM - London View <br> 
        <div class="subtitle">OTP</div>`,
        poster: "img/4.jpg "
    },
    {
        id: 5,
        songName: `Superman <br> 
        <div class="subtitle">Eminem,Dina Rose</div>`,
        poster: "img/5.jpg "
    },
    {
        id: 6,
        songName: `World's Smallest Violin <br> 
        <div class="subtitle">AJR</div>`,
        poster: "img/6.jpg "
    },
    {
        id: 7,
        songName: `Make You Mine <br> 
        <div class="subtitle">HalfSky</div>`,
        poster: "img/7.jpg "
    },
    {
        id: 8,
        songName: `Without Me <br> 
        <div class="subtitle">Eminem</div>`,
        poster: "img/8.jpg "
    },
    {
        id: 9,
        songName: `Heathens <br> 
        <div class="subtitle">Twenty One Pilots</div>`,
        poster: "img/9.jpg "
    },
    {
        id: 10,
        songName: `Dancing With Your Ghost <br> 
        <div class="subtitle">Sasha Alex Sloan</div>`,
        poster: "img/10.jpg "
    },
    {
        id: 11,
        songName: `Die For You <br> 
        <div class="subtitle">Joji</div>`,
        poster: "img/11.jpg "
    },
    {
        id: 12,
        songName: `Another Love<br> 
        <div class="subtitle">Tom Odell</div>`,
        poster: "img/12.jpg "
    },
    {
        id: 13,
        songName: `The Real Slim Shady <br> 
        <div class="subtitle">Eminem</div>`,
        poster: "img/13.jpg "
    },
    {
        id: 14,
        songName: `Still D.R.E. <br> 
        <div class="subtitle">Dr. Dre</div>`,
        poster: "img/14.jpg "
    },
    {
        id: 15,
        songName: `No Vaseline <br> 
        <div class="subtitle">Ice Cube</div>`,
        poster: "img/15.jpg "
    },
    {
        id: 16,
        songName: `All Eyez On Me <br> 
        <div class="subtitle">2Pac,Big Sky</div>`,
        poster: "img/16.jpg "
    },
    {
        id: 17,
        songName: `Devils Moon <br> 
        <div class="subtitle">SKILL</div>`,
        poster: "img/17.jpg "
    },
    {
        id: 18,
        songName: `BOOM SHAQ! <br> 
        <div class="subtitle">cutemain</div>`,
        poster: "img/18.jpg "
    },
    {
        id: 19,
        songName: `MUERTA <br> 
        <div class="subtitle">SKILL</div>`,
        poster: "img/19.jpg "
    },
    {
        id: 20,
        songName: `RATATA <br> 
        <div class="subtitle">Skrillex</div>`,
        poster: "img/20.jpg "
    }
]


 Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    // e.getElementsByTagName('img')[0].src = songs[i].poster;
e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
 }); 


let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');


masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0 ) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
})


const makeAllplay = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-fill');
        el.classList.remove('bi-pause-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = ' rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click', (el)=> {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`; 
        poster_master_play.src = `img/${index}.jpeg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName; 
             
        });
        makeAllBackground ();  
        Array.from(document.getElementsByClassName('songItem'))[index-1  ].style.background =" rgb(105, 105, 105, .1)";
        makeAllplay();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-fill');
        wave.classList.add('active1');

    });
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;


    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(sec1);
    if (sec1 < 10){
        sec1 = `${sec1}0`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10){
        sec2 = `0${sec2}`;
    }

 
    currentStart.innerText = `${min2}:${sec2}`;



    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);

    let seeKbar = seek.value;
    bar2.style.width =`${seeKbar}%`;
    dot.style.left = `${seeKbar}%`;
});


seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');



vol.addEventListener ('change' , () => {
    if (vol.value  == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }

    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        
    }

    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        
    }
    
    
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;


});


let back = document.getElementById('back');
let next = document.getElementById('next');
index = Array.from(document.getElementsByClassName('songItem')).length;

back.addEventListener('click', () =>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    // console.log(index);
    music.src = `audio/${index}.mp3`; 
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName; 
         
    });
    makeAllBackground ();  
    Array.from(document.getElementsByClassName('songItem'))[index-1  ].style.background =" rgb(105, 105, 105, .1)";
    makeAllplay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-fill');
    wave.classList.add('active1');
})

 


next.addEventListener('click', ()=>{
  index++ ; 
  if (index > Array.from(document.getElementsByClassName('songItem')).length ) {
     index = 1;
  }
  music.src = `audio/${index}.mp3`; 
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName; 
         
    });
    makeAllBackground ();  
    Array.from(document.getElementsByClassName('songItem'))[index-1  ].style.background =" rgb(105, 105, 105, .1)";
    makeAllplay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-fill');
    wave.classList.add('active1');
} )












let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
   pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
 })


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];
 
 pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
 })
 
 pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
  })


