const BG_COLOR = "#ffffff";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ BG_COLOR });
  console.log(`background color set to ${BG_COLOR}`);
});