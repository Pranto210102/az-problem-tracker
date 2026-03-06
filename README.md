# AZ Problem Tracker – Chrome Extension

## Introduction

**AZ Problem Tracker** is a Chrome extension developed by **Pranto Bala** that helps programmers bookmark and manage problems on the **maang.in (AlgoZenith)** platform.

While solving problems on AlgoZenith, it is common to encounter questions that you want to revisit later. This extension provides a simple way to **bookmark those problems directly from the problem page** and keep track of them.

This project was built as a **hands-on learning project** to explore Chrome Extension development concepts such as:

* Chrome Extension architecture
* Content Scripts
* Chrome Storage API
* DOM manipulation
* MutationObserver for SPA websites

The extension automatically adds a **bookmark icon on problem pages**, allowing users to save problems for later practice.

---

## Features

* ⭐ Bookmark AlgoZenith problems directly from the problem page
* 📌 Store bookmarked problems using **Chrome Storage API**
* 🚀 Works dynamically on **Single Page Applications (SPA)** using `MutationObserver`
* 🧠 Extracts problem ID automatically from the URL
* 🖱 One-click bookmarking experience
* 💾 Persistent storage across browser sessions

---

## Project Structure

```
AZ Chrome Extension
│
├── manifest.json        # Chrome extension configuration
├── content.js           # Injects bookmark button and handles bookmarking
├── background.js        # Background service worker (not used)
│
├── popup.html           # Extension popup UI
├── popup.js             # Logic for displaying bookmarks in popup
├── popup.css            # Styling for popup interface
│
└── assets/
    ├── bookmark.png     # Bookmark icon
    ├── delete.png       # Delete icon
    ├── ext-icon.png     # Extension icon
    └── play.png         # UI icon
```

---

## Technologies Used

* **JavaScript**
* **HTML**
* **CSS**
* **Chrome Storage API**

---

## How It Works

1. When a user opens a **problem page on maang.in**, the extension detects it.
2. A **bookmark button** is injected into the page.
3. When clicked:
   
   * The extension extracts the **problem name and unique ID from the URL**.
   * The problem is stored in **Chrome's local storage**.
5. The saved problems can later be accessed through the extension popup.

---

## Installation (Developer Mode)

Follow these steps to run the extension locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Pranto210102/az-problem-tracker.git
cd az-problem-tracker
```

### 2. Load the Extension in Chrome

1. Open Chrome and go to:

```
chrome://extensions
```

2. Enable **Developer Mode** (top-right corner)

3. Click **Load unpacked**

4. Select the project folder:

```
AZ Chrome Extension
```

The extension will now appear in your Chrome extensions list.

---

## How to Use

1. Open **https://maang.in**
2. Navigate to any **problem page**
3. A **bookmark icon** will appear near the problem header
4. Click the icon to **save the problem**
5. Open the extension popup to **view your saved bookmarks**

---

## Learning Objectives

This project helped explore the following Chrome extension development concepts:

* Manifest V3 configuration
* Content script injection
* DOM manipulation from extensions
* Handling **SPA navigation using MutationObserver**
* Data persistence with **chrome.storage**
* Building interactive browser tools

---

## Author

**Pranto Bala**
Computer Science & Engineering
Jashore University of Science and Technology (JUST)

GitHub:
https://github.com/Pranto210102

---

## License

This project is open-source and available for educational purposes.
