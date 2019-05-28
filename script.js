"use strict";

let TITLE = {
    first: [" computer", " software", " web", " front-end", " back-end", " full-stack", "n application"],
    firstPos: 0,
    second: ["programmer", "developer", "engineer"],
    secondPos: 0,
    nextFirstTitle: () => TITLE.first[ (TITLE.firstPos++ % TITLE.first.length) ],
    nextSecondTitle: () => TITLE.second[ (TITLE.secondPos++ % TITLE.second.length) ]
};

function handleSendEmailMessage() {

}

function handleMenuExpandCollapse() {

}

function handleTitleTransition() {
    $("#titleFirst").fadeOut("slow", () => {
        $("#titleFirst").text(TITLE.nextFirstTitle()).fadeIn();
    });

    $("#titleSecond").fadeOut("slow", () => {
        $("#titleSecond").text(TITLE.nextSecondTitle()).fadeIn();
    });
}

function runPageEffects() {
    setInterval(handleTitleTransition, 3000);
    handleMenuExpandCollapse();
    handleSendEmailMessage();
}

$(runPageEffects);