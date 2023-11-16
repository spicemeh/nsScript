let userinputP
let userinputT
let execute

function setup() {
  noCanvas();

  userinputP = select('#userinputP');
  userinputT = select('#userinputT');
  execute = select('#execute');

  execute.mousePressed(send);
}

function send() {
  const punktid = userinputP.value();
  const tehted = userinputT.value();

  chrome.tabs.query({active: true, currentWindow: true}, gotTabs);

  function gotTabs(tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {punktid, tehted}
    );
  }
}