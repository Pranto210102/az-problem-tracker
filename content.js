const bookmarkURL = chrome.runtime.getURL("assets/bookmark.png");

window.addEventListener("load", addBookmarkButton);

function addBookmarkButton() {
    const bookmarkButton = document.createElement("img");
    bookmarkButton.id = "add-bookmark-button";
    bookmarkButton.src = bookmarkURL;
    bookmarkButton.style.height = "30px";
    bookmarkButton.style.width = "30px";

    const buttonPos = document.querySelector(".w-100.d-flex.align-items-center.flex-wrap.gap-2.justify-content-between");

    buttonPos.insertAdjacentElement("beforebegin", bookmarkButton);

    bookmarkButton.addEventListener('click', () => {
        alert("Problem Bookmarked!");
    });
}