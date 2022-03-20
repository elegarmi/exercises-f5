let favouriteSongs = ["Welcome to wherever you are", "Waitin' on a sunny day", "Todo se transforma", "Mojado", "Hoppipolla", "Volaré", "Je veux", "Creep", "Una canción para la Magdalena", "Dies Irae"];
favouriteSongs = favouriteSongs.map((name, index) => ({ id: index + 1, name: name}));

let songsListContainer = document.getElementById("songslist-container");
let inputNewSong = document.getElementById("in-new-song");
let btnAddSong = document.getElementById("btn-add-song");
let btnEdit = document.getElementById("btn-edit");
let btnTrash = document.getElementById("btn-trash");

inputNewSong.placeholder = 'Song title';

function renderListSongs() {

    console.log(favouriteSongs);

    songsListContainer.innerHTML = '<ul id="songslist"></ul>'
    let songsList = document.getElementById("songslist");

    favouriteSongs.forEach(song => {

        let songEdit = `<i class="fa fa-edit" id="btn-Edit" onclick="editSong(${song.id})"></i>`;
        let songDelete = `<i class="fa fa-trash-o" id="btn-Trash" onclick="deleteSong(${song.id})"></i>`;
        
        let songButtons = songEdit + songDelete;

        songsList.innerHTML += `<li id="${song.id}"><span>${song.name}</span><div class="fa-icons">${songButtons}</div></li>`;
    
    });
}

renderListSongs();

btnAddSong.addEventListener('click', addSong);
inputNewSong.addEventListener('keyup', function (event) {
        
    if(event.key === 'Enter') {
        addSong();
    }
});

function addSong() {
    if(inputNewSong.value != '') {

        let newSongName = inputNewSong.value;
        let lastSong = favouriteSongs.slice(-1);
        let song = { id: lastSong[0].id + 1, name: newSongName };

        if(favouriteSongs.includes(newSongName)) {
            alert(newSongName + " is already on the list");
        }

        else {
            favouriteSongs.push(song);
        }

        newSongName = '';
        renderListSongs();
    }

    if (inputNewSong.value = '') {
        inputNewSong.placeholder = 'Add a song!';
        alert("Add a song!");
    }

}

function editSong(id) {
    let chosenElement = document.getElementById(id);
    let songTitle = chosenElement.childNodes[0].innerHTML;
    let foundSong = favouriteSongs.find(song => song.name === songTitle);

    if(foundSong.name === songTitle) {
        inputNewSong.value = foundSong.name;
    }
}

function deleteSong(id) {
    let chosenElement = document.getElementById(id);
    let songTitle = chosenElement.childNodes[0].innerHTML;

    chosenElement.remove();

    favouriteSongs = favouriteSongs.filter(function(element) {
        return element.name !== songTitle;
    });

    renderListSongs();
}