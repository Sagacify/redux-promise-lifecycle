"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var start = exports.start = function start(actionName) {
  return actionName + "_START";
};
var end = exports.end = function end(actionName) {
  return actionName + "_END";
};

var promiseLifecycleMiddleware = exports.promiseLifecycleMiddleware = function promiseLifecycleMiddleware(store) {
  return function (next) {
    return function (action) {
      if (action.payload instanceof Promise) {
        store.dispatch(_extends({}, action, { type: start(action.type), payload: null }));
        return next(_extends({}, action, { type: end(action.type) }));
      }
      return next(action);
    };
  };
};