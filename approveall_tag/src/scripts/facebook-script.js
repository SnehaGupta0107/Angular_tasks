
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {    
    if (message.type == 'triggerTagging' && message.from == 'background') {     
        triggerTagging(message.commentText);
    }
    return true
});

function triggerTagging(commentText) {  
   
    if (commentText != '') {          
       $('textarea').val(commentText );
    }
     setTimeout(() => {
      if ($('input[name="post"]').length > 0) {
        $('input[name="post"]').click();
      } else if ($('button[name="post"]').length > 0) {
        $('button[name="post"]').click();
      }
    }, 1500);
    setTimeout(() => {
        window.close();
    }, 2500);
  }

if (document.readyState === "complete" || document.readyState === "interactive") {
    var tagIds = "";   
    setTimeout(() => {
        console.log('extension working');
        var left_content = document.querySelector('[aria-label="Group content"]');
       // left_content.classList.add('approve-button-layout');
        var heading_content = left_content.querySelector('[class="x1srbbgq x1xfsgkm xqmdsaz xh8yej3"] div:first-child');
    
       // Create and append your custom approve button
       var approveButtonCustom = document.createElement('button');
       approveButtonCustom.textContent = 'Approve All and send message';
       approveButtonCustom.className = "approve-button";
       heading_content.appendChild(approveButtonCustom);      
       var memberRequests = left_content.querySelectorAll('[class="x1jx94hy x30kzoy x9jhf4c xgqcy7u x1lq5wgf xev17xk xktsk01 x1d52u69 x19i0xim x6ikm8r x10wlt62 x1n2onr6"]');
      
       if(memberRequests.length <= 0) {
         $(approveButtonCustom).hide();
        }
       approveButtonCustom.addEventListener('click', function (event) {
            var tagIds = "";   
            left_content = document.querySelector('[aria-label="Group content"]');
            var memberRequests = left_content.querySelectorAll('[class="x1jx94hy x30kzoy x9jhf4c xgqcy7u x1lq5wgf xev17xk xktsk01 x1d52u69 x19i0xim x6ikm8r x10wlt62 x1n2onr6"]');
            // Iterate through each member request
            for (var i = 0; i < memberRequests.length; i++) {
                var memberRequest = memberRequests[i];
                var approveButton = memberRequest.querySelector('[aria-label="Approve"]');
                if(approveButton){
                profileUrlDiv = approveButton.closest('[class="x1y1aw1k x4uap5 xwib8y2 xkhd6sd"]'); 
                profileUrl = profileUrlDiv.querySelector('a').href; 
                }
                if(profileUrl) {
                    memberId = profileUrl.split('/')[6];  
                    tagIds += "@["+memberId+":] ";     
                }              
                approveButton.click();

            }
            chrome.storage.sync.get(["welcomePost","comment"],function(result){                      
                welcomePostUrl = result.welcomePost;
                commentText = result.comment +" "+ tagIds;
                chrome.runtime.sendMessage({ action: "tagComment", welcomePostUrl: welcomePostUrl, commentText: commentText });
            });  
          })    
      }, 2000);
        
    }