export function getParagraphs(file) {
  var paragraphs = file.split("\n");
  paragraphs = paragraphs.map((paragraph) => {
    paragraph = paragraph.trim();
    if (paragraph === "") {
      return "\n";
    } else {
      return paragraph;
    }
  });
  return paragraphs;
}
function setInitialType(headerCount) {
  if (headerCount === -1) {
    return "br";
  }
  if (headerCount === 0) {
    return "small";
  } else {
    return "strong" + headerCount;
  }
}
export function convertToObject(paragraph) {
  var headerCount = 0;
  var content = "";
  paragraph.split("").forEach((char) => {
    if (char === "#") {
      headerCount++;
    } else if (char === "\n") {
      headerCount = -1;
    } else {
      content += char;
    }
  });
  return {
    type: setInitialType(headerCount),
    content: content.trim(),
  };
}
