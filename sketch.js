const userinputP = document.getElementById("userinputP")
const userinputT = document.getElementById("userinputT")
const execute = document.getElementById("execute")

function send(){
  console.log("e");
  const punktid = userinputP.value;
  const tehted = userinputT.value;

  chrome.tabs.query({active: true, currentWindow: true}, gotTabs);

  function gotTabs(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, frameIds: ["sisufreim"]},
      func : injectedFunction,
      args: [punktid, tehted]
  });
  }
};

function injectedFunction(p, t){
  /*UPunkte = p
  UKokku = p

  tehteidTasemeti = [0, Math.round(t/5), Math.round(t/5), Math.round(t/5), Math.round(t/5), Math.round(t/5)]
  console.log("Set");*/
  console.log(UKokku);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('execute').addEventListener('click', send);
})