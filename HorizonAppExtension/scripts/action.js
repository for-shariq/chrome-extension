
document.getElementById('fillForm').addEventListener('click',function(){
    //const tabId = getTabId();
    var uid = document.getElementById('uid').value;

    chrome.tabs.query({ active: true }, function (tabs) {
      var tab = tabs[0];  

      new Promise(resolve=>{
        chrome.scripting.executeScript({
          target: { tabId:  tab.id, allFrames: true},
          files: ['scripts/injector.js'],          
        });    
      }, () => { resolve(true) ;});
      
    });   
    


   /* chrome.tabs.query({ active: true }, function (tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            files: ['./scripts/injector.js']            
          }
        );
      });
  /*  chrome.scripting.executeScript({
        target: {allFrames: true},
        files: ['injector.js'],
        args: [value]    
    });*/
});

