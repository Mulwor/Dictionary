const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// https://dictionaryapi.dev/

const answer = document.getElementById("answer");

const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url} ${inpWord}`)
        // "https://api.dictionaryapi.dev/api/v2/entries/en/"

        .then((response) => response.json())

        .then((data) => {
            console.log(data);
            answer.innerHTML = ` <div class="word">  <h3>${inpWord}</h3> </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                
                <p class="word-meaning"> ${data[0].meanings[0].definitions[0].definition} </p>
                
                <p class="word-example"> ${data[0].meanings[0].definitions[0].example || ""} </p>`;
        })

        .catch(() => {
            answer.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
