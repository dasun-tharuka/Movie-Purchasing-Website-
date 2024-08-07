// showing go up button when scroll down
window.addEventListener('scroll',function(){
    var scrollPosition = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    if (scrollPosition > (scrollHeight/2) - clientHeight) {
        document.getElementById('goUp').style.bottom = "190px";
    }else{
        document.getElementById('goUp').style.bottom = "-60px";
    }
});

const romanticMovieList = [
    {
        index: 1,
        imgPath: "Pics/Romantic/After.jpg",
        alter: "After",
        title: "After",
        description: "\"After\" is a romantic drama film about Tessa Young and Hardin Scott, a college student and bad boy. Based on Anna Todd's novel, the film explores young love, self-discovery, and relationships. The film's magnetic chemistry and poignant storytelling make it a must-watch for fans of romance and emotional depth."
    },
    {
        index: 2,
        imgPath: "Pics/Romantic/Ghosted.jpg",
        alter: "Ghosted",
        title: "Ghosted",
        description: "Cole falls head over heels for enigmatic Sadie, but then makes the shocking discovery that she's a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world."
    },
    {
        index: 3,
        imgPath: "Pics/Romantic/Lucky.jpg",
        alter: "Lucky",
        title: "The Lucky One",
        description: "\"The Lucky One\" is a romantic drama film based on Nicholas Sparks' novel. Logan Thibault, a Marine, discovers a photograph of a woman he believes is his good luck charm. He travels to North Carolina to find Beth, but his secret threatens to unravel. The film explores fate, healing, and second chances in love, capturing audiences' hearts and emotions."
    },
    {
        index: 4,
        imgPath: "Pics/Romantic/Tu Jhoothi.jpg",
        alter: "Tu Jhoothi Makkar",
        title: "Tu Jhoothi Makkar",
        description: "Mickey, a carefree businessman and womaniser, helps couples break up. However, things change for him when he falls for Tinni, a witty and beautiful chartered accountant."
    },
    {
        index: 5,
        imgPath: "Pics/Romantic/LostCity.jpg",
        alter: "Lost City",
        title: "Lost City",
        description: "Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city's lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her."
    },
]

const romanticTextlist = `Romantic movies, also known as romance films, are a popular genre of movies that focus on love, affection, and emotional relationships between characters. These films typically revolve around a central romantic relationship, often following the journey of two individuals as they fall in love, face challenges, and ultimately strive to be together.
Romantic movies explore various themes, such as the excitement of a new love, the struggles of maintaining a long-term relationship, the power of sacrifice for love, and the complexities of human emotions. They can be heartwarming, uplifting, and sometimes bittersweet, evoking a wide range of emotions in the audience.
The genre often incorporates elements of drama, comedy, and sometimes fantasy or historical settings to enhance the storytelling and create a captivating cinematic experience. Romantic movies have a universal appeal, as they tap into the fundamental emotions and desires that are common to human beings - the longing for connection, the search for true love, and the belief that love can conquer obstacles.
Of course, horror movies aren't for everyone. Some people find them too intense or disturbing, while others simply don't enjoy being scared. However, for those who do enjoy horror movies, there are countless options to choose from.
These films have been an integral part of cinema for decades, and they continue to resonate with audiences worldwide, providing an escape into the world of romance and reminding us of the enduring power of love.`

const romanticText = document.getElementById("container");
let romanticMoviesHtmlContent = `
        <div id="path">Home &nbsp;>&nbsp; Content pages &nbsp;>&nbsp; Romantic Movies</div>
        <h1>Romantic Movies</h1>`

let lines = romanticTextlist.split("\n")
console.log("======", lines)
lines.forEach(line => {
    romanticMoviesHtmlContent += `
        <p> ${line} </p>
    `
})
romanticMovieList.forEach(movie => {
    romanticMoviesHtmlContent += `
        <div class="holder">
            <img src="${movie.imgPath}" alt="${movie.alter}">
            <h4>${movie.index}. ${movie.title}</h4>${movie.description}
        </div>
    `
})
romanticText.innerHTML = romanticMoviesHtmlContent;