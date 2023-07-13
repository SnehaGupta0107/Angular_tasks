
var tagCommentId = 0;
var commentText = "";
var taggingTabId:number = 0;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
   
    if (message.action === "tagComment") { 
        console.log("inside");
         var welcomePostUrlArray = new Array();     
         var welcomePostUrl = message.welcomePostUrl;
         commentText = message.commentText;
        if (welcomePostUrl.indexOf('permalink.php?') > -1) {
            welcomePostUrlArray = welcomePostUrl.split('story_fbid=');
            welcomePostUrlArray = welcomePostUrlArray[1].split('&');
            welcomePostUrl = welcomePostUrlArray[0];
        }
        welcomePostUrl = "290857076662937";
    var welcomePostTagComment =   'https://d.facebook.com/mbasic/comment/advanced/?target_id=' +
                                welcomePostUrl +
                                '&pap&at=compose&photo_comments' +
                                "oneString" +
                                '&is_from_friend_selector=1&_rdr';   
    
    commentTaggingWindow(welcomePostTagComment);  
    }
  });


  function taggingTabListener(tabId:Number, changeInfo:any, tab:any) {
    console.log("taggingTabListener");
    if (changeInfo.status === "complete" && tabId === taggingTabId) {        
        chrome.tabs.sendMessage(taggingTabId, {
            type: 'triggerTagging',
            from: 'background',
            commentText: commentText
        });
        chrome.tabs.onUpdated.removeListener(taggingTabListener);
    }
}
 
function commentTaggingWindow(url:string) {
    chrome.windows.create({
        url: url,
        focused: true,
        type: "popup"
    }, function(tabs:any) {
         taggingTabId = tabs.tabs[0].id;
        chrome.tabs.onUpdated.addListener(taggingTabListener);
    });
}