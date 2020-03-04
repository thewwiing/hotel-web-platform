import {CONTROLLERS} from '../../app/controllers';

export const customMiddleware = store => next => action => {
    if (CONTROLLERS[action.type] && typeof CONTROLLERS[action.type] === 'function') {
        CONTROLLERS[action.type](store, action);
    }
    next(action);
};
