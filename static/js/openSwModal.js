/** this function is called from list blocks (do not delete) **/
function openSwModal(url, size) {
    MicroModal.init({
        disableScroll: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true
    });

    MicroModal.show("sw-modal");

    const iframeElem = document.querySelector(".sw-modal-iframe");
    const modalContainer = document.querySelector(".sw-modal-container");

    const viewModeParam = "viewMode=modal";
    const urlIsLocal = url.startsWith('#') || url.startsWith('/') || url.startsWith(window.location.origin);
    const modalUrl = urlIsLocal ? (url.indexOf("?") !== -1 ? url + "&" + viewModeParam : url + "?" + viewModeParam) : url;
    iframeElem.setAttribute("src", modalUrl);

    modalContainer.classList.remove('sw-modal-size-sm', 'sw-modal-size-md', 'sw-modal-size-lg', 'sw-modal-size-xl');
    modalContainer.classList.add('sw-modal-size-' + size);

    setTimeout(() => {
        // Add event listener to detect when the modal is closed
        const closeButton = document.querySelector('.sw-modal-close');
        const backdrop = document.querySelector('.sw-modal-overlay');

        closeButton.addEventListener('click', resetIframe);
        backdrop.addEventListener('click', resetIframe);
    }, 1000)

}

const resetIframe = () => {
    const iframeElem = document.querySelector('.sw-modal-iframe');
    iframeElem.removeAttribute('src');
}