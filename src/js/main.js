function setCursorToEnd(editor) {
  var range = document.createRange();
  var sel = window.getSelection();
  range.setStart(editor, editor.childNodes.length);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}

function getRandomPlaceholderMessage() {
  var messages = [
    "Let's get to it!! ",
    "Your awesome ideas here... ",
    "Let ME remember that for you... ",
  ];
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
  if (!content) {
    var editor = document.getElementById("editor");
    editor.innerText = "";
    editor.focus();
  }
}

function onPageLoad() {
  var editor = document.getElementById("editor");
  var content = window.localStorage.getItem("notes");
  editor.onclick = clearEditorIfNoSavedContent
  setEditorContent(editor);
  if(content) {
    setCursorToEnd(editor);
    editor.focus();
  }
}

window.onkeyup = saveContent
window.onkeydown = clearEditorIfNoSavedContent
window.onload = onPageLoad