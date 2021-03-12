function saveContent() {
  var editor = document.getElementById("editor");
  window.localStorage.setItem("notes", editor.innerHTML);
}

function onPageLoad() {
  var editor = new MediumEditor('.editor',
    {
      delay: 500,
      buttonLabels: 'fontawesome',
      targetBlank: true,
      toolbar: {
          buttons: ['h1','h2','h3','bold', 'italic', 'quote', 'anchor', 'unorderedlist', 'orderedlist']
      },
      anchor: {
          placeholderText: 'Enter Link'
      },
      paste: {
          cleanPastedHTML: true
      },
      anchorPreview: {
          hideDelay: 300
      },
      placeholder: {
          text: 'Click to edit'
      }
    }
  );
  editor.subscribe('editableInput', function(event, editorElement) { saveContent(); });
  var editorElement = document.getElementById("editor");
  var content = window.localStorage.getItem("notes");
  editorElement.innerHTML = content
  editorElement.focus();
}

window.onkeyup = saveContent
window.onload = onPageLoad