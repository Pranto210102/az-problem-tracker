const problemKey = "AZ_PROBLEM_KEY";

const bookmarkSection = document.getElementById("bookmarks");

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get([problemKey], (result) => {
        const currentBookmarks = result[problemKey] || [];
        viewBookmarks(currentBookmarks);
    });
});

function viewBookmarks(bookmarks) {
    bookmarkSection.innerHTML = "";

    if (bookmarks.length === 0) {
        bookmarkSection.innerHTML = '<p class="empty-msg">No bookmarks added yet.</p>';
        return;
    }

    bookmarks.forEach((bookmark) => addNewBookmark(bookmark));
}

function addNewBookmark(bookmark) {
    const newBookmark = document.createElement("div");
    newBookmark.classList.add("bookmark");
    newBookmark.dataset.url = bookmark.url;
    newBookmark.dataset.id = bookmark.id;

    const bookmarkTitle = document.createElement("div");
    bookmarkTitle.textContent = bookmark.name;
    bookmarkTitle.classList.add("bookmark-title");
    bookmarkTitle.title = bookmark.name;

    const bookmarkControls = document.createElement("div");
    bookmarkControls.classList.add("bookmark-controls");

    setControlAttributes("assets/play.png", onPlay, bookmarkControls, "Open problem");
    setControlAttributes("assets/delete.png", onDelete, bookmarkControls, "Delete bookmark");

    newBookmark.appendChild(bookmarkTitle);
    newBookmark.appendChild(bookmarkControls);
    bookmarkSection.appendChild(newBookmark);
}

function setControlAttributes(src, onClickHandler, parent, title) {
    const control = document.createElement("img");
    control.src = src;
    control.classList.add("bookmark-control");
    control.title = title;
    control.addEventListener("click", onClickHandler);
    parent.appendChild(control);
}

function onPlay(event) {
    const bookmarkElement = event.target.closest(".bookmark");
    if (!bookmarkElement) return;
    chrome.tabs.create({ url: bookmarkElement.dataset.url });
}

function onDelete(event) {
    const bookmarkElement = event.target.closest(".bookmark");
    if (!bookmarkElement) return;
    const id = bookmarkElement.dataset.id;

    chrome.storage.sync.get([problemKey], (result) => {
        const currentBookmarks = result[problemKey] || [];
        const updateBookmarks = currentBookmarks.filter((bookmark) => bookmark.id !== id);
        chrome.storage.sync.set({ [problemKey]: updateBookmarks }, () => {
            viewBookmarks(updateBookmarks);
        });
    });
}