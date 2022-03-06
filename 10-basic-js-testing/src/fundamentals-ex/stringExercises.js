export function returnAString(string)
{
    /* Completa la function */
    return string;
}

export function concatenateStrings()
{
    /* Completa la function */
    let firstWord = 'I';
    let secondWord = 'Love';
    let thirdWord = 'JS'
    
    return (firstWord + ' ' + secondWord + ' ' + thirdWord);
}

export function giveOneLetter()
{
    /* Completa la function */
    let dog = 'dog';
    let lastChar = dog.substring(dog.length - 1);

    return lastChar;
}

export function giveTheIndexOfWord()
{
    let wordToSearch = 'Butterfly';
    let phrase = "Once upon a time!!!";
    
    return phrase.search(wordToSearch);
}

export function replaceFishWords()
{
    let phrase = "Give a Man a Fish";
    let toReplace = "Fish";
    let toPut = "Pussy Cat";

    return phrase.replace(toReplace, toPut);
}

export function giveAllLettersInUppercase()
{
    let phrase = 'Ride Him, Cowboy!';
    
    return phrase.toUpperCase();
}

export function removeWhiteSpaces()
{
    let phrase = '    Hands Down    ';
    let regex = /(\s+)/g;

    return phrase.replace(regex, " ").trim();
}