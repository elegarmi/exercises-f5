let favouriteSongs = ["Welcome to wherever you are", "Waitin' on a sunny day", "Todo se transforma", "Mojado", "Hoppipolla", "Volaré", "Je veux", "Creep", "Una canción para la Magdalena", "Dies Irae"];

let songsListContainer = document.getElementById("songslist-container");
let inputNewSong = document.getElementById("in-new-song");
let btnAddSong = document.getElementById("btn-add-song");
let btnEdit = document.getElementById("btn-edit");
let btnTrash = document.getElementById("btn-trash");

inputNewSong.placeholder = 'Song title';

function renderListSongs() {
    songsListContainer.innerHTML = '<ul id="songslist"></ul>'
    let songsList = document.getElementById("songslist");

    favouriteSongs.forEach(song => {
    songsList.innerHTML += `<li id="${song.replace(/\s|["']/g, '')}-`+favouriteSongs.indexOf(song)+`"><span>${song}</span><div class="fa-icons"><i class="fa fa-edit" id="btn-Edit" onclick="editSong('${song.replace(/\s|["']/g, '')}-`+favouriteSongs.indexOf(song)+`')"></i><i class="fa fa-trash-o" id="btn-Trash" onclick="deleteSong('${song.replace(/\s|["']/g, '')}-`+favouriteSongs.indexOf(song)+`')"></i></div></li>`;
    });
    
}

renderListSongs();

btnAddSong.addEventListener('click', addSong);
inputNewSong.addEventListener('keyup', function (event) {
    let idElements = id.split("-");
    let songPosition = idElements[1];
    
    if(event.key === 'Enter') {
        console.log(inputNewSong.value);
        if(inputNewSong.value = favouriteSongs.includes(favouriteSongs[songPosition])) {
            favouriteSongs[songPosition] = inputNewSong.value;
        }

        addSong();
    }
});

function addSong() {
    if(inputNewSong.value != '') {
        favouriteSongs.push(inputNewSong.value);
        inputNewSong.value = '';
        renderListSongs();
    }

    if (inputNewSong.value = '') {
        inputNewSong.placeholder = 'Add a song!';
    }
}

function editSong(id) {
    let songTitle = document.getElementById(id).childNodes[0].innerHTML;
    inputNewSong.value = songTitle;
}

function deleteSong(id) {
    let idElements = id.split("-");
    let songPosition = idElements[1];

    favouriteSongs.splice(songPosition, 1);
    document.getElementById(id).remove();

    renderListSongs();
}