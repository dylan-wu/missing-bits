var elements = document.getElementsByTagName('*');

function replaceWord(word, replacing) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
    
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
    
            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var re = new RegExp(word,"gi")
                var replacedText = text.replace(re, replacing);
    
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
replaceWord("Millennials", "snake people");
replaceWord("From Wikipedia", "to");
