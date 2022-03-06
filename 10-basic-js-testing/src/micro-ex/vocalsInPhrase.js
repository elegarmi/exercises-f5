/* 
Escribe un programa que pida una frase y escriba las vocales que aparecen
*/

export function getPhrase()
{
    document.body.innerHTML = /* html */
        `<div>
            <input id="input-phrase" type="text" value="la">
        </div>`

    let phrase = document.getElementById('input-phrase').value;

    return phrase;
}

export function getVocals()
{
    document.body.innerHTML = /* html */
        `<div>
            <input id="input-phrase" type="text" value="la le li lo lu pa pe pi po pu">
        </div>`

    let phrase = document.getElementById('input-phrase').value;
    let regex = /[lp]/g;
    let result = phrase.replace(regex, "").split(" ");
    let filtered = [];
    
    result.forEach((element) => {
        if (!filtered.includes(element)) {
            filtered.push(element);
        }
    });
    
    return filtered;
}

export function deleteDuplicity()
{
    let list = ['i','i'];
    let filtered = [];
    
    list.forEach((element) => {
        if(!filtered.includes (element)) {
            filtered.push(element);
        }
    });

    return filtered;
}

export function searchVocals()
{
    document.body.innerHTML = /* html */
        `<div>
            <input id="input-phrase" type="text" value="Hello World">
            <h2 id="vocals-in-phrase"></h2>
        </div>`

    let phrase = document.getElementById('input-phrase').value;
    let vowels = 'e,o';
    let vowelsList = vowels.split(",");
    let filtered = [];

    vowelsList.forEach((element) => {
        if(phrase.includes (element) && !filtered.includes (element)) {
            filtered.push(element);
        }
    });

    let result = filtered.join(',');

    return result;
}