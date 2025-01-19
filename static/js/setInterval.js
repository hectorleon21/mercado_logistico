/** Bugfix on multiple ?recordId= issue **/
setInterval(function () {
    $('section a').each(function () {
        const href = $(this).attr('href');
        if (href && href.includes('?recordId=')) {
            const countOfRecords = (href.match(/\?recordId=/g) || []).length;
            if (countOfRecords > 1) {
                const index = href.lastIndexOf('?recordId=');
                const cleanedHref = href.substring(0, index);
                $(this).attr('href', cleanedHref);
            }
        }
    });
}, 1000);
