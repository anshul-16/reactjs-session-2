"use strict";

var App = function App() {
  var inputElement = React.useRef();
  var focusInput = function focusInput() {
    inputElement.current.focus();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    ref: inputElement
  }), /*#__PURE__*/React.createElement("button", {
    onClick: focusInput
  }, "Focus Input"));
};
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));
