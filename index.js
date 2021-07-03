//Notes
//initial render
//function for populating aside with username + image
//function for populating library with cards
//event to click on library card to move from library to watchlist
//(extra) update watchlist count under user name
//alphabetize cards based on title



//adding new shows once form submits

document.querySelector('#libraryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("event triggered")

    let newCard = {
        title: e.target.title.value,
        //actors: e.target.actors.value,
        years: e.target.years.value,
        seasons: e.target.seasons.value,
        episodes: e.target.episodes.value,
        runningTime: e.target.runningTime.value,
        streaming: e.target.streaming.value,
        image_url: e.target.image_url.value
    }

    renderLibraryCard(newCard)

})

//Aside Render

function asideRender() {
    let profilePic = document.querySelector('#profilePicture')
    let userName = document.querySelector('#username')
    //let watchListCount = document.querySelector("#watchListCount")

    profilePic.src = allData.profilePicture
    userName.textContent = allData.username
}

function renderLibraryCard(card){
    //creating elements
    let li = document.createElement('li')
    let h3Title = document.createElement('h3')
    let pYear = document.createElement('p')
    let img = document.createElement('img')
    let pEpisodes = document.createElement('p')
    let pStreaming = document.createElement('p')
    let cardButton = document.createElement('button')
    let watchListUl = document.querySelector('#watchListUl')
  
    //adding content to elements from data.js
    li.className = 'card'
    h3Title.textContent = card.title
    pYear.textContent = card.years
    img.src = card.image_url;
    pEpisodes.textContent = `Seasons: ${card.seasons}  |  Episodes: ${card.episodes}  |  Run Time: ${card.runningTime}`
    pStreaming = `Streaming: ${card.streaming}`
    cardButton.textContent = "+"
    cardButton.id="addButton"

    //appending new elements so they appear in the DOM
    li.append(img, h3Title, pYear, pEpisodes, pStreaming, cardButton);
    document.querySelector("#libraryList").append(li)

    //move card to watchlist when "+" is clicked ; once in Watch List + --> -; if - is clicked, goes back down to library
    //could play with adding an "archived section"
    cardButton.addEventListener('click', (e) => {
        watchListUl.append(li)
        cardButton.textContent = '-'
            cardButton.addEventListener('click', (e) => {
                document.querySelector("#libraryList").append(li)
                cardButton.textContent = '+'
            })
        document.querySelector('#placeholder').remove()
    })

    //need to work on getting this functionality to work
    li.addEventListener('mouseover', (e) => {
        li.style.borderColor = 'black';
        li.style.borderWidth = '10px'
    })
}



//Initial Render

function initialRender() {
    //console.log(allData);
    asideRender();
    allData.library.forEach(renderLibraryCard)

}
initialRender()