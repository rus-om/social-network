import appReducer, {AppReducerInitialStateType,  initialiseSuccessAC} from "../appReducer";

let startState: AppReducerInitialStateType = {
    initialize: false
}

test('Application initialization', () => {

    const action = initialiseSuccessAC();

    const endState = appReducer(startState, action)

    expect(endState.initialize).toBe(true);
});
