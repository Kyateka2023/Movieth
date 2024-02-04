const nav = document.getElementById("nav");

//create a new element for the bars icon
const i_element = document.createElement("i");
i_element.setAttribute("class", "fa-solid fa-bars");
i_element.setAttribute("id", "bars");
nav.appendChild(i_element);
const bars = document.getElementById("bars");

//create a div and set it to be a child of the nav
const div_element = document.createElement("div");
div_element.setAttribute("id", "new-nav");
nav.appendChild(div_element);
const droidNav = document.getElementById("new-nav");
div_element.style.display= "none"; // make the new nav invisible.

//create 2 anchor tags to be the child of the new div element
const a_home = document.createElement("a");
const a_movies = document.createElement("a");
const a_series = document.createElement("a");
div_element.appendChild(a_home);
div_element.appendChild(a_movies);
div_element.appendChild(a_series);
const a_homeText = document.createTextNode("HOME");
const a_moviesText = document.createTextNode("MOVIES");
const a_seriesText = document.createTextNode("SERIES");
a_home.appendChild(a_homeText);
a_movies.appendChild(a_moviesText);
a_series.appendChild(a_seriesText);
a_home.setAttribute("id", "homeID");
a_movies.setAttribute("id", "moviesID");
a_series.setAttribute("id", "seriesID");
a_movies.setAttribute("href", "#");
a_series.setAttribute("href", "#");
a_home.setAttribute("href", "#");
const movies = document.getElementById("moviesID");
const series = document.getElementById("seriesID");
const home = document.getElementById("homeID");

//hover effects on the new links
function hoverOn()
{
    console.log("he touched the button.");
}

movies.addEventListener("mouseon", hoverOn);

let countedclick = 1;
//create an event for when the bars are clicked.
droidNav.style.visibility = "hidden";
function barsClicked()
{
    console.log("You have clicked me.");

    console.log(countedclick);
    if (countedclick === 1) 
    {
        console.log("On");
        droidNav.style.visibility = "visible";
        countedclick = 0;
    }
    else
    {
        console.log("Off");
        droidNav.style.visibility = "hidden";
        countedclick = 1;
    }
}

bars.addEventListener("click", barsClicked);


if (window.innerWidth >= 768)
{
    bars.style.display = "none";
    movies.style.display = "none";
    series.style.display = "none";
    div_element.style.display= "none";
}
else
{
    div_element.style.display = "block";
    nav.style.position ="relative";
    bars.style.display = "block";
    droidNav.style.position = "absolute";
    droidNav.style.zIndex = "2";
    droidNav.style.right = "-1rem";
    droidNav.style.top = "2.55rem";
    droidNav.style.width = "18rem";
    droidNav.style.height = "100dvh";
    droidNav.style.background = "black";
    droidNav.style.display = "flex";
    droidNav.style.flexDirection = "column";
}

//click on the button to unmute the video
let mutecount = 1;
const video = document.querySelector(".video-bg");
const videobutton = document.getElementById("video-state");
videobutton.setAttribute("class", "fa-solid fa-volume-xmark");
function muteFunction()
{
    if(mutecount === 1)
    {
        videobutton.removeAttribute("class", "fa-solid fa-volume-xmark");
        videobutton.setAttribute("class", "fa-solid fa-volume-high");
        mutecount = 0;
        video.muted = false

    }
    else
    {
        mutecount = 1;
        video.muted = true
        videobutton.removeAttribute("class", "fa-solid fa-volume-high");
        videobutton.setAttribute("class", "fa-solid fa-volume-xmark");
    }
}

videobutton.addEventListener("click", muteFunction);

//remove the video element when the screen size gets to less than 768px
if (innerWidth < 567) 
{

    video.remove();    
    videobutton.remove();
    //replace that with the image for Spiderman
    const movieInfo = document.querySelector(".movie-info");
    movieInfo.style.backgroundImage = "url('Images/bigspider.jpg')";
    movieInfo.style.backgroundSize = "cover";
    movieInfo.style.backgroundRepeat = "no-repeat";
    movieInfo.style.backgroundAttachment = "Scroll";
}


if (innerWidth > 567 && innerWidth < 768) 
{
    video.remove();    
    videobutton.remove();
    //replace that with the image for Spiderman
    const movieInfo = document.querySelector(".movie-info");
    movieInfo.style.backgroundImage = "url('Images/goldspider.jpg')";
    movieInfo.style.backgroundSize = "100% 100%";
    movieInfo.style.backgroundRepeat = "no-repeat";
    movieInfo.style.backgroundAttachment = "Scroll";
}

//access the entire-section div
const trailerHolderSection = document.getElementById("trailer-holder-section");

//access one of the trailer links
const trailerLinks = document.getElementById("trailer-link");

//spiderman box
const trailerbox = document.createElement("div");
trailerbox.setAttribute("id", "trailerID");
trailerHolderSection.appendChild(trailerbox);
const trailerCard = document.getElementById("trailerID");

trailerCard.style.border = "1px solid white";
trailerCard.style.padding = "2rem";
trailerCard.style.backgroundColor = "#0f0f0f";
trailerCard.style.position = "absolute";
trailerCard.style.top = "50%";
trailerCard.style.left = "50%";
trailerCard.style.transform = "translate(-50%, -50%)";
trailerCard.style.display = "none";
trailerCard.style.width = "50rem";
trailerCard.style.height = "auto";
trailerCard.style.zIndex = "1";

//create an close button to close the player
const closeButton = document.createElement("button");
closeButton.setAttribute("id", "closeButtonID");
const closeTextNode = document.createTextNode("X");
closeButton.appendChild(closeTextNode);
trailerCard.appendChild(closeButton);

//create a div to hold the video
const videoHolder = document.createElement("div");
videoHolder.setAttribute("id", "videoHolderID");
const videoHolderID = document.getElementById("videoHolderID");
trailerbox.appendChild(videoHolder);
videoHolder.style.border = "1px solid white";
videoHolder.style.height = "100%";


//create a video element
const videoTrailer = document.createElement("video");
videoTrailer.setAttribute("width", "100%");
videoTrailer.setAttribute("height", "350px");
videoTrailer.setAttribute("type", "video/mp4");
videoTrailer.setAttribute("id", "videoElementID");

// Set the source using the source element
const sourceElement = document.createElement("source");
sourceElement.setAttribute("src", "Clips/y2mate.com - SPIDERMAN ACROSS THE SPIDERVERSE Official Trailer HD_1080p.mp4");
sourceElement.setAttribute("type", "video/mp4");

// Set the poster attribute
videoTrailer.setAttribute("poster", "Images/imagesspider1.jpeg");

// Append the source element to the video element
videoTrailer.appendChild(sourceElement);

// Append the video element to the video holder div
videoHolder.appendChild(videoTrailer);

// Add controls attribute to enable player controls
videoTrailer.setAttribute("controls", "true");

console.log(videoTrailer);

//each time they click the X button the video plays is closed and the card is also closed
const closeButtonID = document.getElementById("closeButtonID");
closeButtonID.addEventListener("click", closeVideoFunction);
function closeVideoFunction()
{
    trailerCard.style.display = "none";
    videoTrailer.pause();
}



//when the user clickes the link, the trailer box should appear

function trailerFunction()
{
    trailerCard.style.display = "block";  

    if (window.innerWidth >= 600 && window.innerWidth <= 834)
    {
        console.log(trailerCard);
        trailerCard.style.width = "34rem";
    }
    else if (window.innerWidth <= 599) 
    {
        trailerCard.style.display = "none";    
        window.location.href = "trailer1.html";
    }
    else
    {
        trailerCard.style.width = "50rem";
    }
}

trailerLinks.addEventListener("click", trailerFunction);


//create a another box for the trailer link one
//access the trailer-link1 
const trailerLink1 = document.getElementById("trailer-link1");

//create the mummies box
const trailerBox1 = document.createElement("div");
trailerBox1.setAttribute("id", "trailerBox1ID");
trailerHolderSection.appendChild(trailerBox1);
const trailerBox1ID = document.getElementById("trailerBox1ID");

//create an close button to close the player
const closeButton1 = document.createElement("button");
closeButton1.setAttribute("id", "closeButton1ID");
const closeTextNode1 = document.createTextNode("X");
closeButton1.appendChild(closeTextNode1);
trailerBox1.appendChild(closeButton1);

//create a div to hold the video
const videoHolder1 = document.createElement("div");
videoHolder1.setAttribute("id", "videoHolder1ID");
const videoHolderID1 = document.getElementById("videoHolder1ID");
trailerBox1.appendChild(videoHolder1);
videoHolder1.style.border = "1px solid white";
videoHolder1.style.height = "100%";


//create a video element
const videoTrailer1 = document.createElement("video");
videoTrailer1.setAttribute("src", "Clips/y2mate.com - Mummies Official Trailer 2 Warner Bros UK Ireland_1080p.mp4");
videoTrailer1.setAttribute("width", "100%");
videoTrailer1.setAttribute("poster", "Images/Mummiesposter.jpeg");
videoTrailer1.setAttribute("height", "350px");
videoTrailer1.setAttribute("type", "video/mp4");
videoTrailer1.setAttribute("id", "videoElement1ID");

//make the video attribute be the child to the parent
videoHolder1.appendChild(videoTrailer1);

// Add controls attribute to enable player controls
videoTrailer1.setAttribute("controls", "true");

//each time they click the X button the video plays is closed and the card is also closed
const closeButton1ID = document.getElementById("closeButton1ID");
closeButton1ID.addEventListener("click", closeVideoFunction1);
function closeVideoFunction1()
{
    trailerBox1ID.style.display = "none";
    videoTrailer1.pause();
}

//when the user clickes the link, the trailer box should appear

function trailerFunction1()
{
    trailerBox1ID.style.display = "block";  

    if (window.innerWidth >= 600 && window.innerWidth <= 834)
    {
        console.log(trailerBox1ID);
        trailerBox1ID.style.width = "34rem";
    }
    else if (window.innerWidth <= 599) 
    {
        trailerBox1ID.style.display = "none";    
        // window.location.href = "trailer1.html";
        console.log("Create for me a website.")
    }
    else
    {
        trailerBox1ID.style.width = "50rem"
    }
}

trailerLink1.addEventListener("click", trailerFunction1);



//create a box for the beekeeper for trailer link two
//access the trailer-Link2
const trailerLink2 = document.getElementById("trailer-link2");

//create the beekeeper box
const trailerBox2 = document.createElement("div");
trailerBox2.setAttribute("id", "trailerBox2ID");
trailerHolderSection.appendChild(trailerBox2);
const trailerBox2ID = document.getElementById("trailerBox2ID");

//create an close button to close the player
const closeButton2 = document.createElement("button");
closeButton2.setAttribute("id", "closeButton2ID");
const closeTextNode2 = document.createTextNode("X");
closeButton2.appendChild(closeTextNode2);
trailerBox2.appendChild(closeButton2);

//create a div to hold the video
const videoHolder2 = document.createElement("div");
videoHolder2.setAttribute("id", "videoHolder2ID");
const videoHolderID2 = document.getElementById("videoHolder2ID");
trailerBox2.appendChild(videoHolder2);
videoHolder2.style.border = "1px solid white";
videoHolder2.style.height = "100%";

//create a video element
const videoTrailer2 = document.createElement("video");
videoTrailer2.setAttribute("src", "Clips/y2mate.com - THE BEEKEEPER Official Restricted Trailer_1080p.mp4");
videoTrailer2.setAttribute("width", "100%");
videoTrailer2.setAttribute("poster", "Images/The-Beekeeper-Season-2-release-date-poster.jpg");
videoTrailer2.setAttribute("height", "350px");
videoTrailer2.setAttribute("type", "video/mp4");
videoTrailer2.setAttribute("id", "videoElement2ID");

//make the video attribute be the child to the parent
videoHolder2.appendChild(videoTrailer2);

// Add controls attribute to enable player controls
videoTrailer2.setAttribute("controls", "true");

//each time they click the X button the video plays is closed and the card is also closed
const closeButton2ID = document.getElementById("closeButton2ID");
closeButton2ID.addEventListener("click", closeVideoFunction2);
function closeVideoFunction2()
{
    trailerBox2ID.style.display = "none";
    videoTrailer2.pause();
}

//when the user clickes the link, the trailer box should appear

function trailerFunction2()
{
    trailerBox2ID.style.display = "block";  

    if (window.innerWidth >= 600 && window.innerWidth <= 834)
    {
        console.log(trailerBox2ID);
        trailerBox2ID.style.width = "34rem";
    }
    else if (window.innerWidth <= 599) 
    {
        trailerBox2ID.style.display = "none";    
        // window.location.href = "trailer2.html";
        console.log("Create for me a website.")
    }
    else
    {
        trailerBox2ID.style.width = "50rem"
    }
}

trailerLink2.addEventListener("click", trailerFunction2);

//create a box for wonka for link 3
//access the trailer-Link3.
const trailerLink3 = document.getElementById("trailer-link3");

//create the wonka box
const trailerBox3 = document.createElement("div");
trailerBox3.setAttribute("id", "trailerBox3ID");
trailerHolderSection.appendChild(trailerBox3);
const trailerBox3ID = document.getElementById("trailerBox3ID");

//create an close button to close the player
const closeButton3 = document.createElement("button");
closeButton3.setAttribute("id", "closeButton3ID");
const closeTextNode3 = document.createTextNode("X");
closeButton3.appendChild(closeTextNode3);
trailerBox3.appendChild(closeButton3);

//create a div to hold the video
const videoHolder3 = document.createElement("div");
videoHolder3.setAttribute("id", "videoHolder3ID");
const videoHolderID3 = document.getElementById("videoHolder3ID");
trailerBox3.appendChild(videoHolder3);
videoHolder3.style.border = "1px solid white";
videoHolder3.style.height = "100%";

//create a video element
const videoTrailer3 = document.createElement("video");
videoTrailer3.setAttribute("src", "Clips/y2mate.com - WONKA Official Trailer_1440p.mp4");
videoTrailer3.setAttribute("width", "100%");
videoTrailer3.setAttribute("poster", "Images/wonka-poster.jpg");
videoTrailer3.setAttribute("height", "350px");
videoTrailer3.setAttribute("type", "video/mp4");
videoTrailer3.setAttribute("id", "videoElement3ID");

//make the video attribute be the child to the parent
videoHolder3.appendChild(videoTrailer3);

// Add controls attribute to enable player controls
videoTrailer3.setAttribute("controls", "true");

//each time they click the X button the video plays is closed and the card is also closed
const closeButton3ID = document.getElementById("closeButton3ID");
closeButton3ID.addEventListener("click", closeVideoFunction3);
function closeVideoFunction3()
{
    trailerBox3ID.style.display = "none";
    videoTrailer3.pause();
}

function trailerFunction3()
{
    trailerBox3ID.style.display = "block";  

    if (window.innerWidth >= 600 && window.innerWidth <= 834)
    {
        trailerBox3ID.style.width = "34rem";
    }
    else if (window.innerWidth <= 599) 
    {
        trailerBox3ID.style.display = "none";    
        // window.location.href = "trailer3.html";
        console.log("Create for me a website.")
    }
    else
    {
        trailerBox3ID.style.width = "50rem"
    }
}

trailerLink3.addEventListener("click", trailerFunction3);


//Now access on of the trailer sections
const trailerHolderSection1 = document.getElementById("trailer-holder-section1")

//access one of the trailer links
const trailerLinks4 = document.getElementById("trailer-link4");

//Kung Gu Panda trailer box
const trailerDiv1 = document.createElement("div");
trailerDiv1.setAttribute("id", "trailerBox4ID");
trailerHolderSection1.appendChild(trailerDiv1);
const trailerBox4 = document.getElementById("trailerBox4ID");

//create an close button to close the player
const closeButton4 = document.createElement("button");
closeButton4.setAttribute("id", "closeButton4ID");
const closeTextNode4 = document.createTextNode("X");
closeButton4.appendChild(closeTextNode4);
trailerBox4.appendChild(closeButton4);

//create a div to hold the video
const videoHolder4 = document.createElement("div");
videoHolder4.setAttribute("id", "videoHolder4ID");
const videoHolder4ID = document.getElementById("videoHolder4ID");
trailerBox4.appendChild(videoHolder4);
videoHolder4.style.border = "1px solid white";
videoHolder4.style.height = "100%";


//create a video element
const videoTrailer4 = document.createElement("video");
videoTrailer4.setAttribute("src", "Clips/y2mate.com - KUNG FU PANDA 4 Official Trailer_1080p.mp4");
videoTrailer4.setAttribute("poster", "Images/KungFuPanda-poster.jpg");
videoTrailer4.setAttribute("width", "100%");
videoTrailer4.setAttribute("height", "350px");
videoTrailer4.setAttribute("type", "video/mp4");
videoTrailer4.setAttribute("id", "videoElement4ID");

//make the video attribute be the child to the parent
videoHolder4.appendChild(videoTrailer4);

// Add controls attribute to enable player controls
videoTrailer4.setAttribute("controls", "true");

//each time they click the X button the video plays is closed and the card is also closed
const closeButton4ID = document.getElementById("closeButton4ID");
closeButton4ID.addEventListener("click", closeVideoFunction4);
function closeVideoFunction4()
{
    trailerBox4.style.display = "none";
    videoTrailer4.pause();
}


//when the user clickes the link, the trailer box should appear

function trailerFunction4()
{
    trailerBox4.style.display = "block";  

    if (window.innerWidth >= 600 && window.innerWidth <= 834)
    {
        console.log(trailerBox4);
        trailerBox4.style.width = "34rem";
    }
    else if (window.innerWidth <= 599) 
    {
        trailerBox4.style.display = "none"; 
        console.log("Create for me a website")   
        // window.location.href = "trailer1.html";
    }
    else
    {
        trailerBox4.style.width = "50rem";
    }
}

trailerLinks4.addEventListener("click", trailerFunction4);


//access one of the trailer links
const trailerLinks5 = document.getElementById("trailer-link5");

 //Kung Gu Panda trailer box
const trailerDiv2 = document.createElement("div");
trailerDiv2.setAttribute("id", "trailerBox5ID");
trailerHolderSection1.appendChild(trailerDiv2);
const trailerBox5 = document.getElementById("trailerBox5ID");

//create an close button to close the player
const closeButton5 = document.createElement("button");
closeButton5.setAttribute("id", "closeButton5ID");
const closeTextNode5 = document.createTextNode("X");
closeButton5.appendChild(closeTextNode5);
trailerBox5.appendChild(closeButton5);

//create a div to hold the video
const videoHolder5 = document.createElement("div");
videoHolder5.setAttribute("id", "videoHolder5ID");
const videoHolder5ID = document.getElementById("videoHolder5ID");
trailerBox5.appendChild(videoHolder5);
videoHolder5.style.border = "1px solid white";
videoHolder5.style.height = "100%";


//create a video element
const videoTrailer5 = document.createElement("video");
videoTrailer5.setAttribute("src", "Clips/y2mate.com - Despicable Me 4 Official Trailer_1080p.mp4");
videoTrailer5.setAttribute("poster", "Images/Despicable.jpg");
videoTrailer5.setAttribute("width", "100%");
videoTrailer5.setAttribute("height", "350px");
videoTrailer5.setAttribute("type", "video/mp4");
videoTrailer5.setAttribute("id", "videoElement5ID");

//make the video attribute be the child to the parent
videoHolder5.appendChild(videoTrailer5);

// Add controls attribute to enable player controls
videoTrailer5.setAttribute("controls", "true");

//each time they click the X button the video plays is closed and the card is also closed
const closeButton5ID = document.getElementById("closeButton5ID");
closeButton5ID.addEventListener("click", closeVideoFunction5);
function closeVideoFunction5()
{
    trailerBox5.style.display = "none";
    videoTrailer6.pause();
}

//when the user clickes the link, the trailer box should appear

function trailerFunction5()
{
    trailerBox5.style.display = "block";  

    if (window.innerWidth >= 600 && window.innerWidth <= 834)
    {
        console.log(trailerBox5);
        trailerBox5.style.width = "34rem";
    }
    else if (window.innerWidth <= 599) 
    {
        trailerBox5.style.display = "none"; 
        console.log("Create for me a website")   
        // window.location.href = "trailer1.html";
    }
    else
    {
        trailerBox5.style.width = "50rem";
    }
}

trailerLinks5.addEventListener("click", trailerFunction5);


//create a tiger's Apprentice box

//access one of the trailer links
const trailerLinks6 = document.getElementById("trailer-link6");

 //Kung Gu Panda trailer box
const trailerDiv3 = document.createElement("div");
trailerDiv3.setAttribute("id", "trailerBox6ID");
trailerHolderSection1.appendChild(trailerDiv3);
const trailerBox6 = document.getElementById("trailerBox6ID");

//create an close button to close the player
const closeButton6 = document.createElement("button");
closeButton6.setAttribute("id", "closeButton6ID");
const closeTextNode6 = document.createTextNode("X");
closeButton6.appendChild(closeTextNode6);
trailerBox6.appendChild(closeButton6);

//create a div to hold the video
const videoHolder6 = document.createElement("div");
videoHolder6.setAttribute("id", "videoHolder6ID");
const videoHolder6ID = document.getElementById("videoHolder6ID");
trailerBox6.appendChild(videoHolder6);
videoHolder6.style.border = "1px solid white";
videoHolder6.style.height = "100%";

//create a video element
const videoTrailer6 = document.createElement("video");
videoTrailer6.setAttribute("src", "Clips/Tigers-Apprentice.mp4");
videoTrailer6.setAttribute("poster", "Images/Tiger-poster.jpg");
videoTrailer6.setAttribute("width", "100%");
videoTrailer6.setAttribute("height", "350px");
videoTrailer6.setAttribute("type", "video/mp4");
videoTrailer6.setAttribute("id", "videoElement6ID");

//make the video attribute be the child to the parent
videoHolder6.appendChild(videoTrailer6);

// Add controls attribute to enable player controls
videoTrailer6.setAttribute("controls", "true");

//each time they click the X button the video plays is closed and the card is also closed
const closeButton6ID = document.getElementById("closeButton6ID");
closeButton6ID.addEventListener("click", closeVideoFunction6);
function closeVideoFunction6()
{
    trailerBox6.style.display = "none";
    videoTrailer6.pause();
}

//when the user clickes the link, the trailer box should appear

function trailerFunction6()
{
    trailerBox6.style.display = "block";  

    if (window.innerWidth >= 600 && window.innerWidth <= 834)
    {
        trailerBox6.style.width = "34rem";
    }
    else if (window.innerWidth <= 599) 
    {
        trailerBox6.style.display = "none"; 
        console.log("Create for me a website")   
        // window.location.href = "trailer1.html";
    }
    else
    {
        trailerBox5.style.width = "50rem";
    }
}

trailerLinks6.addEventListener("click", trailerFunction6);

//create a Trolls Band together box
//access one of the trailer links
const trailerLinks7 = document.getElementById("trailer-link7");

 //Trolls Band Together trailer box
const trailerDiv4 = document.createElement("div");
trailerDiv4.setAttribute("id", "trailerBox7ID");
trailerHolderSection1.appendChild(trailerDiv4);
const trailerBox7 = document.getElementById("trailerBox7ID");

//create an close button to close the player
const closeButton7 = document.createElement("button");
closeButton7.setAttribute("id", "closeButton7ID");
const closeTextNode7 = document.createTextNode("X");
closeButton7.appendChild(closeTextNode7);
trailerBox7.appendChild(closeButton7);

//create a div to hold the video
const videoHolder7 = document.createElement("div");
videoHolder7.setAttribute("id", "videoHolder7ID");
const videoHolder7ID = document.getElementById("videoHolder7ID");
trailerBox7.appendChild(videoHolder7);
videoHolder7.style.border = "1px solid white";
videoHolder7.style.height = "100%";

//create a video element
const videoTrailer7 = document.createElement("video");
videoTrailer7.setAttribute("src", "Clips/y2mate.com - TROLLS BAND TOGETHER Official Trailer_1080p.mp4");
videoTrailer7.setAttribute("poster", "Images/Troll-band-together.jpg");
videoTrailer7.setAttribute("width", "100%");
videoTrailer7.setAttribute("height", "350px");
videoTrailer7.setAttribute("type", "video/mp4");
videoTrailer7.setAttribute("id", "videoElement7ID");

//make the video attribute be the child to the parent
videoHolder7.appendChild(videoTrailer7);

// Add controls attribute to enable player controls
videoTrailer7.setAttribute("controls", "true");

//each time they click the X button the video plays is closed and the card is also closed
const closeButton7ID = document.getElementById("closeButton7ID");
closeButton7ID.addEventListener("click", closeVideoFunction7);
function closeVideoFunction7()
{
    trailerBox7.style.display = "none";
    videoTrailer7.pause();
}

//when the user clickes the link, the trailer box should appear

function trailerFunction7()
{
    trailerBox7.style.display = "block";  

    if (window.innerWidth >= 600 && window.innerWidth <= 834)
    {
        trailerBox7.style.width = "34rem";
    }
    else if (window.innerWidth <= 599) 
    {
        trailerBox7.style.display = "none"; 
        console.log("Create for me a website")   
        // window.location.href = "trailer1.html";
    }
    else
    {
        trailerBox7.style.width = "50rem";
    }
}

trailerLinks7.addEventListener("click", trailerFunction7);
