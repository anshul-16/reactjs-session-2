"use strict";

var ParentComp = function ParentComp() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Parent Component"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ChildComponent, {
    name: "Aman",
    "class": "6"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ChildComponent, {
    name: "Rahul",
    "class": "10"
  }));
};
var ChildComponent = function ChildComponent(props) {
  console.log(props);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Child info-"), /*#__PURE__*/React.createElement("div", null, "Name - ", props.name), /*#__PURE__*/React.createElement("div", null, "Class - ", props["class"]));
};
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(ParentComp, null));
