function createElement(element, props, children) {
  const newElement = document.createElement(element);

  if (Array.isArray(children)) {
    children.forEach(child => addChild(newElement, props, child));
  } else {
    addChild(newElement, props, children);
  }

  return newElement;

  function addChild(element, props, child) {
    if (typeof child === "object") {
      element.appendChild(child);
    } else {
      element.innerHTML += child;
    }
    addAttribut(element, props);
  }

  function addAttribut(el, props) {
    for (let attribut in props) {
      if (typeof props[attribut] !== "object") {
        el[attribut] = props[attribut];
      } else {
        for (let deepAttribut in props[attribut]) {
          el[attribut][deepAttribut] = props[attribut][deepAttribut];
        }
      }
    }
  }
}

function render(item, rootElement) {
  rootElement.appendChild(item);
}

window.React = {
  createElement,
  render
};

const app = React.createElement(
  "div",
  {
    style: {
      backgroundColor: "red"
    }
  },
  [
    React.createElement("span", undefined, "Hello world"),
    React.createElement("br"),
    "This is just a text node",
    React.createElement("div", {
      textContent: "Text content"
    })
  ]
);

React.render(app, document.getElementById("app"));
