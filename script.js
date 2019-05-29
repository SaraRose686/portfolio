"use strict";

let TITLE = {
    first: [" computer", " software", " web", " front-end", " back-end", " full-stack", "n application"],
    firstPos: 0,
    second: ["programmer", "developer", "engineer"],
    secondPos: 0,
    nextFirstTitle: () => TITLE.first[ (TITLE.firstPos++ % TITLE.first.length) ],
    nextSecondTitle: () => TITLE.second[ (TITLE.secondPos++ % TITLE.second.length) ],
    fps: 1,
};

let BIBLE_QUEST_IMAGES = {
    files: [{ 
        src: "images/1-home.jpg",
        alt: "Bible Quiz Home",
    }, { 
        src: "images/2-question.jpg",
        alt: "Bible Quiz Home",
    }, { 
        src: "images/3-questionSelect.jpg",
        alt: "Bible Quiz Home",
    }, { 
        src: "images/4-questionCorrect.jpg",
        alt: "Bible Quiz Home",
    }, { 
        src: "images/5-bgTooltip.jpg",
        alt: "Bible Quiz Home",
    }, { 
        src: "images/6-final.jpg",
        alt: "Bible Quiz Home",
    }],
    position: 0
};



function handleTitleTransition() {
    setTimeout( function() {
        requestAnimationFrame(handleTitleTransition);

        $("#titleFirst").fadeTo("slow", 0, function() {
            $(this).text(TITLE.nextFirstTitle()).fadeTo(400, 1);
        });

        $("#titleSecond").fadeTo("slow", 0, function() {
            $(this).text(TITLE.nextSecondTitle()).fadeTo(400, 1);
        });    
    } , 1000/TITLE.fps)
}

function handleImageCarousel() {
    return null;
}

function runPageEffects() {
    //setInterval(handleTitleTransition, 3000);
    requestAnimationFrame(handleTitleTransition);
    //handleTitleTransition();
    handleImageCarousel();
}

$(runPageEffects);