var tagCommentId = 0;
var commentText = "";
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("inside");
    if (message.action === "tagComment") { 
         var welcomePostUrlArray = new Array();     
         var welcomePostUrl = message.welcomePostUrl;
         commentText = message.commentText;
        if (welcomePostUrl.indexOf('permalink.php?') > -1) {
            welcomePostUrlArray = welcomePostUrl.split('story_fbid=');
            welcomePostUrlArray = welcomePostUrlArray[1].split('&');
            welcomePostUrl = welcomePostUrlArray[0];
        }
    welcomePostTagComment =   'https://d.facebook.com/mbasic/comment/advanced/?target_id=' +
                                welcomePostUrl +
                                '&pap&at=compose&photo_comments' +
                                "oneString" +
                                '&is_from_friend_selector=1&_rdr';   
    
    commentTaggingWindow(welcomePostTagComment);  
    }
  });

function taggingTabListener(tabId, changeInfo, tab) {
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
function commentTaggingWindow(url) {
    chrome.windows.create({
        url: url,
        focused: false,
        type: "popup"
    }, function(tabs) {
        taggingTabId = tabs.tabs[0].id;
        chrome.tabs.onUpdated.addListener(taggingTabListener);
    });
}

