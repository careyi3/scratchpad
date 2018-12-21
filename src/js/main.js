function setCursorToEnd(editor) {
  var range = document.createRange();
  var sel = window.getSelection();
  range.setStart(editor, editor.childNodes.length);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}

var messages = [
  "Let's get to it!!",
  "Your awesome ideas here...",
  "Let ME remember that for you...",
];

function getRandomPlaceholderMessage() {
  var index = Math.floor((Math.random() * (messages.length)));
  return messages[index];
}

function setEditorContent(editor) {
  var content = window.localStorage.getItem("notes");
  if (content) {
    editor.innerText = content + " ";
  } else {
    editor.innerText = getRandomPlaceholderMessage();
  }
}

function saveContent() {
  var editor = document.getElementById("editor");
  window.localStorage.setItem("notes", editor.innerText.trim());
}

function clearEditorIfNoSavedContent() {
  var content = window.localStorage.getItem("notes");
  var editor = document.getElementById("editor");
  if (!content && messages.includes(editor.innerText)) {
    var editor = document.getElementById("editor");
    editor.innerText = "";
    editor.focus();
  }
}

function revertIfNoContent() {
  var editor = document.getElementById("editor");
  setEditorContent(editor);
}

function onPageLoad() {
  var editor = document.getElementById("editor");
  var content = window.localStorage.getItem("notes");
  editor.onfocus = clearEditorIfNoSavedContent;
  editor.onblur = revertIfNoContent;
  setEditorContent(editor);
  if(content) {
    setCursorToEnd(editor);
    editor.focus();
  }
}

window.onkeyup = saveContent
window.onkeydown = clearEditorIfNoSavedContent
window.onload = onPageLoad