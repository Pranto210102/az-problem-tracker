const bookmarkURL = chrome.runtime.getURL("assets/bookmark.png");
const problemKey = "AZ_PROBLEM_KEY";

const observer = new MutationObserver(addBookmarkButton);

observer.observe(document.body, { childList: true, subtree: true });
addBookmarkButton();

function onProblemPage() {
    return window.location.pathname.startsWith("/problems/");
}

function addBookmarkButton() {
    console.log("Adding bookmark button");
    if (!onProblemPage() || document.getElementById("add-bookmark-button")) return;

    const bookmarkButton = document.createElement("img");
    bookmarkButton.id = "add-bookmark-button";
    bookmarkButton.src = bookmarkURL;
    bookmarkButton.style.height = "30px";
    bookmarkButton.style.width = "30px";

    const buttonPos = document.querySelector(".w-100.d-flex.align-items-center.flex-wrap.gap-2.justify-content-between");

    buttonPos.insertAdjacentElement("beforebegin", bookmarkButton);

    bookmarkButton.addEventListener('click', addBookmarkHandler)
}

async function addBookmarkHandler() {
    const currentBookmark = await getCurrentBookmark();

    const problemURL = window.location.href;
    const uniqueID = getUniqueID(problemURL);
    const problemName = document.querySelector(`h4.coding_problem_info_heading__G9ueL.fw-bolder.rubik.text-xl.mb-0`).textContent;

    if(currentBookmark.some((bookmark) => bookmark.id ===uniqueID )) return;

    const bookmarkObj = {
        id : uniqueID,
        name : problemName,
        url : problemURL
    }

    const updateBookmarks = [...currentBookmark, bookmarkObj];

    chrome.storage.sync.set({[problemKey]: updateBookmarks}, () => {
        console.log("Updated the bookmark", updateBookmarks);
    });
}

function getUniqueID(problemURL) {
    const start = problemURL.indexOf("/problems/") + "/problems/".length;
    const end = problemURL.indexOf("?");

    return problemURL.substring(start, end);
}

function getCurrentBookmark() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get([problemKey], (result) => {
            resolve(result[problemKey] || []);
        });
    });
}
