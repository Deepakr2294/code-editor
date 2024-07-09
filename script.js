function runCode() {
  const htmlCode = document.getElementById("html-editor").value;
  const cssCode =
    "<style>" + document.getElementById("css-editor").value + "</style>";
  const jsCode =
    "<script>" + document.getElementById("js-editor").value + "</script>";
  const iframe = document.getElementById("output");
  iframe.contentDocument.open();
  iframe.contentDocument.write(htmlCode + cssCode + jsCode);
  iframe.contentDocument.close();
}
const btn = document.getElementById("btn")[0]; // Get the first button element
btn.addEventListener(onclick, function () {
  btn.style.backgroundColor = "#4380c0";
});
