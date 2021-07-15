const checkHrefItem = [".md", "#"];
const checkItem = ["试验"];

for (let aElem of document.querySelectorAll("a")) {
    for (let target of checkHrefItem) {
        if (aElem.href.indexOf(target) !== -1) {
            aElem.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        }
    }
}

for (let target of checkItem) {
    if (document.body.innerHTML.indexOf(target) !== -1) {
        body.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
    }
}