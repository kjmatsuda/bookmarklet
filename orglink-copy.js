// Author:  Koji Matsuda
// Created: 2019/3/9
// Comment: Copy url and title of page to clipbord as org link format.
//          To Install on firefox, you must remove new line. (M-% C-q C-j enter enter)
javascript:(function()
            {
                function copyTextToClipboard(textVal){
                    var copyFrom = document.createElement("textarea");
                    copyFrom.textContent = textVal;
                    var bodyElm = document.getElementsByTagName("body")[0];
                    bodyElm.appendChild(copyFrom);
                    copyFrom.select();
                    var retVal = document.execCommand('copy');
                    bodyElm.removeChild(copyFrom);
                    return retVal;
                }
                function displayOnPrompt(textVal) {
                    prompt("", textVal);
                }
                var contents = document.title;
                var orgLink = "[[" + location.href + "][" + contents + "]]";
                var succeed =  copyTextToClipboard(orgLink);
                if (!succeed) {
                    displayOnPrompt(orgLink);
                }
            })();
