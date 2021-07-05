

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

    document.querySelector('#libraryForm').reset();

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
    cardButton.className="addButton"

    //appending new elements so they appear in the DOM
    li.append(img, h3Title, pYear, pEpisodes, pStreaming, cardButton);
    document.querySelector("#libraryList").append(li)


}



//Initial Render

function initialRender() {
    //console.log(allData);
    asideRender();
    allData.library.forEach(renderLibraryCard);


  

    // //Event listener for adding card from Library to Watch List

    document.querySelectorAll("#library .addButton").forEach(btn => {
        btn.addEventListener('click', (e) => {
            btn.textContent = '-'
            //btn.className = "removeButton"
            let card = btn.closest("li")
            document.querySelector('#watchListUl').append(card)
                btn.addEventListener('click', (e) => {
                    if (confirm("Are you sure you want to remove this from your Watch List?")){
                        document.querySelector("#libraryList").append(card)
                        btn.textContent = '+'
                    }
                })
           document.querySelector('#placeholder').remove()
        })
    })


    //Hover over card and get bold black background  - couldn't get to work
    document.querySelectorAll('#library li .card').forEach(card => {
        card.addEventListener('mouseover', (e) => {
            card.style.borderColor = 'red';
            card.style.borderWidth = '10px';
        })
    })


  
    //If (-) at top of Watch List or Library div is clicked, minimizes (or toggles Ul) + changes the (-) to a (+)
    //If (+) aat top of Watch List or Library div is clicked, maximizes (or toggles Ul) + changes the (+) to a (-)
    //WL minimizer
    // const wLminMaxBtn = document.querySelector('#wLminMaxButton')
    // wLminMaxBtn.addEventListener('click', (e) => {
    //     wLminMaxBtn.textContent = '+'
    //     document.querySelector('#watchListUl').style.maxHeight = 0;

    //         wLminMaxBtn.addEventListener('click', (e) => {
    //             document.querySelector('#watchListUl').style.maxHeight = "600 px";
    //             wLminMaxBtn.textContent = '-';

    //         })


    // })

    // //Lib minimizer
    // const libminMaxButton = document.querySelector('#libminMaxButton')
    // libminMaxButton.addEventListener('click', (e) => {
    //     libminMaxButton.textContent = '+'
    //     document.querySelector('#libraryList').style.height = 0;
    // })

}

initialRender()





//old notes / code to Delete

//move card to watchlist when "+" is clicked ; once in Watch List + --> -; if - is clicked, goes back down to library
    //could play with adding an "archived section"
    //need to figure out how to loop this activity

    // cardButton.addEventListener('click', (e) => {
    //     watchListUl.append(li)
    //     cardButton.textContent = '-'
    //         cardButton.addEventListener('click', (e) => {
    //             if (confirm("Are you sure you want to remove this from your Watch List?")){
    //                 document.querySelector("#libraryList").append(li)
    //                 cardButton.textContent = '+'
    //             }
    //         })
    //     document.querySelector('#placeholder').remove()

    // })

     // //Event listener for removing card from Watch List to Library
    // document.querySelectorAll("#watchListUl .removeButton").forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //         btn.textContent = '+'
    //         //console.log(btn.closest("li"))
    //         btn.className = "addButton"
    //         document.querySelector('#libraryList').append(btn.closest("li"))
    //     })
    // })
    


   
    // if (document.querySelectorAll('#watchListUl .card').length === 0){
    //     let li = document.createElement('li')
    //     let pText = document.createElement('p')

    //     li.id = "placeholder"
    //     pText.textContent = "+ Add shows from the Library"

    //     li.append(pText);
    //     document.querySelector('#watchListUl').append(li);
    // } 