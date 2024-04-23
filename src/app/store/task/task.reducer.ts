import { Action } from "../../models/interfaces/action.interface";
import { Task } from "../../models/interfaces/task.interface";
import { ACTIONS } from "./task.actions";

export function task_reducer(state: Array<Task> = [], action: Action ) {
    switch(action.type) {
        case  ACTIONS.ADD_TASK:
            return [action.payload, ...state];
        case ACTIONS.DELETE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        case ACTIONS.GET_TASKS_SUCCESS:
            var newState;
            if(state.length > 0) {
                newState = [...state, ...action.payload];
            }
            else {
                newState = action.payload;
            }
            return newState;

        default:
            return state;
    }
}