"use strict";

const TITLE = {
    first: ["a computer", "a software", "a web", "a front-end", "a back-end", "a full-stack", "an application"],
    firstPos: 0,
    second: ["programmer", "developer", "engineer"],
    secondPos: 0,
    nextFirstTitle: () => TITLE.first[ (TITLE.firstPos++ % TITLE.first.length) ],
    nextSecondTitle: () => TITLE.second[ (TITLE.secondPos++ % TITLE.second.length) ]
};

// Bible Quest Images for carousel
const BQ_IMAGES = {
    files: [{ 
        src: "images/1-home.jpg",
        alt: "Bible Quiz home",
    }, { 
        src: "images/2-question.jpg",
        alt: "Bible Quiz question",
    }, { 
        src: "images/3-questionSelect.jpg",
        alt: "Bible Quiz question selected",
    }, { 
        src: "images/4-questionCorrect.jpg",
        alt: "Bible Quiz question answered correct",
    }, { 
        src: "images/5-bgTooltip.jpg",
        alt: "Bible Quiz tooltip for Bible Gateway",
    }, { 
        src: "images/6-final.jpg",
        alt: "Bible Quiz final screen",
    }],
    pos: 0,
};

function handleTitleTransition() {
    $('#title').on('click', function(e) {
        $("#titleFirst").fadeTo("slow", 0, function() {
            $(this).text(TITLE.nextFirstTitle()).fadeTo(400, 1);
        });

        $("#titleSecond").fadeTo("slow", 0, function() {
            $(this).text(TITLE.nextSecondTitle()).fadeTo(400, 1);
        });    
    });
}

function handleImageCarousel() {
    // Clicking to Previous Image
    $('#bqImagePrev').on('click', function(e) {
        BQ_IMAGES.pos = BQ_IMAGES.pos > 0 ? 
            BQ_IMAGES.pos-1 : 
            BQ_IMAGES.files.length-1;
        $('#bqImage').attr({
            'src': BQ_IMAGES.files[BQ_IMAGES.pos].src, 
            'alt': BQ_IMAGES.files[BQ_IMAGES.pos].alt
        });
    });

    // Clicking to Next Image
    $('#bqImageNext').on('click', function(e) {
        BQ_IMAGES.pos = BQ_IMAGES.pos < BQ_IMAGES.files.length-1 ?
            BQ_IMAGES.pos+1 : 0;
        $('#bqImage').attr({
            'src': BQ_IMAGES.files[BQ_IMAGES.pos].src, 
            'alt': BQ_IMAGES.files[BQ_IMAGES.pos].alt
        });
    });
}

function runPageEffects() {
    handleTitleTransition();
    handleImageCarousel();
}

$(runPageEffects);