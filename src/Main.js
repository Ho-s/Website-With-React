"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
// http://developer.kbb.com/#!/idws/1-Default
var Main = function () {
    var sth = 6;
    react_1.useEffect(function () {
        function solution(gift_cards, wants) {
            var answer = 0;
            for (var i = 0; i < gift_cards.length; i++) {
                for (var j = 0; j < wants.length;) {
                    console.log('i');
                }
            }
            return answer;
        }
        solution([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
    }, []);
    return (<>
        <div>hello world</div>
        <div>hello world</div>
        </>);
};
exports["default"] = Main;
