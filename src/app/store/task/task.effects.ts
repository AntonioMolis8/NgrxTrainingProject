import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { ACTIONS } from "./task.actions";

@Injectable()
export class TaskEffects {

    apiURL: string = "https://jsonplaceholder.typicode.com/todos";

    constructor(private http: HttpClient, private actions$: Actions) {}

    /* @Effect() deprecated in this version */
    getTasks$: Observable<Action> = createEffect( () =>
        this.actions$.pipe(
            ofType(ACTIONS.GET_TASKS),
            mergeMap(action => 
                this.http.get(this.apiURL).pipe(
                    map(data => ({type: ACTIONS.GET_TASKS_SUCCESS, payload: data})),
                    catchError( () => of({type: ACTIONS.GET_TASKS_FAIL}))
                )
            )
        )
    )
}