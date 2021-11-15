var area = document.querySelector("textarea");

function printBeautifulJson() {
  document.getElementById("tree-view-container").innerHTML = "";
  if (area.value) {
    if (IsValidJSONString(area.value)) {
      document
        .getElementById("tree-view-container")
        .appendChild(
          document.createTextNode(
            JSON.stringify(JSON.parse(area.value), null, 4)
          )
        );
    } else {
      alert("Json is not valid");
    }
  }
}

function printJsonTree() {
  document.getElementById("tree-view-container").innerHTML = "";
  if (area.value) {
    if (IsValidJSONString(area.value)) {
      const tree = JsonView.createTree(area.value);
      JsonView.render(tree, document.querySelector(".root"));
    } else {
      alert("Json is not valid");
    }
  }
}

function IsValidJSONString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
