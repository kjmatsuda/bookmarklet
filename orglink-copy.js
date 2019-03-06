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
                var prefix="";
                var suffix="";
                var contents = document.title;
                var target="_blank";
                var succeed =  copyTextToClipboard(prefix+"[[" + location.href + "][" + contents + "]]" + suffix);
            })();


