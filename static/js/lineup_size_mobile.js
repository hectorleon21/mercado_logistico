/** Image lineup on mobile **/
window.addEventListener(BlocksRenderedEventName, function () {
    function changeImageDirectionsOnMobile() {

        const classListSection = $('body>div>section')?.attr('class')?.split(/\s+/);
        const textClassSection = classListSection?.find(cls => cls.startsWith('feature'));

        const classListHeader = $('body>div>header')?.attr('class')?.split(/\s+/);
        const textClassHeader = classListHeader?.find(cls => cls.startsWith('hero'));

        /*If FEATURE block*/
        if (textClassSection) {
            findRowsWidthImageAndReverse(textClassSection)
        }

        /*If HERO block*/
        if (textClassHeader) {
            findRowsWidthImageAndReverse(textClassHeader)
        }
    }

    function findRowsWidthImageAndReverse(textClass) {
        const rowsWithImages = $('.' + textClass + ' .row.align-items-center').has('img').toArray();
        const rowsWithLeftSideImages = rowsWithImages.filter(row => {
            return $(row).children().first().children().first().prop("tagName") === 'IMG';
        });


        rowsWithLeftSideImages.forEach(row => {
            if ($(window).width() <= 768) {
                row.classList.add('flex-column-reverse')
            }
        });
    }

    if ($(window).width() <= 768) {
        changeImageDirectionsOnMobile();
    }

    window.parent.postMessage({ name: 'previewIframeLoaded' }, '*');
});

/** BG Size on mobile **/
window.addEventListener(BlocksRenderedEventName, function () {
    if ($(window).width() <= 768) {
        var element = $('section.sw-background-size-auto, header.sw-background-size-auto');
        element.removeClass('sw-background-size-auto');
        element.css('background-size', 'cover');

        $('section.sw-background-attachment-fixed, header.sw-background-attachment-fixed').removeClass('sw-background-attachment-fixed');
    }
});

/** Disable zoom on mobile **/
window.addEventListener(BlocksRenderedEventName, function () {
    if ($(window).width() <= 768) {
        $('input.sw-font-size-s').removeClass('sw-font-size-s');
        $('textarea.sw-font-size-s').removeClass('sw-font-size-s');
        $('select.sw-font-size-s').removeClass('sw-font-size-s');
    }
});

window.addEventListener('user-sign-out', (e) => {
    const message = {
        name: 'user-sign-out-triggered',
    };

    window.parent.postMessage(message, '*');
});