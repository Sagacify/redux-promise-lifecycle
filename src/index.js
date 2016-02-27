export const start = actionName => `${actionName}_START`;
export const end = actionName => `${actionName}_END`;

export const promiseLifecycleMiddleware = store => next => action => {
  if (action.payload && typeof action.payload.then === 'function') {
    store.dispatch({ ...action, type: start(action.type), payload: null });
    return next({ ...action, type: end(action.type) });
  }
  return next(action);
};
