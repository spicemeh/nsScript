chrome.runtime.connect();

console.log("Loaded");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const p = request[0]
  UPunkte = p
  UKokku = p

  const t = request[1]
  tehteidTasemeti = [0, Math.round(t/5), Math.round(t/5), Math.round(t/5), Math.round(t/5), Math.round(t/5)]
  console.log("Set");
}
);