"use strict";
exports.__esModule = true;
var react_1 = require("react");
var header_1 = require("./components/header/header");
function App() {
    var _a = react_1.useState(0), likes = _a[0], setCount = _a[1];
    var _b = react_1.useState('начальное значение'), value = _b[0], setValue = _b[1];
    return (
    // <div>
    //   <p>likes: {likes}</p>
    //   <button onClick={() => setCount(likes + 1)}>+</button>
    //   <button onClick={() => setCount(likes - 1)}>-</button>
    //   <h1>{value}</h1>
    //   <input value={value} onChange={(event) => setValue(event.target.value)}/>
    // </div>
    react_1["default"].createElement(header_1["default"], null));
}
exports["default"] = App;
