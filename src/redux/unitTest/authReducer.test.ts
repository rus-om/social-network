import authReducer, {AuthReducerInitialStateType, setAuthUserDataAC} from "../authReducer";

const startState: AuthReducerInitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

test('User authorization', () => {

    const action = setAuthUserDataAC(16, "testLogin", "testEmail", true);

    const endState = authReducer(startState, action)

    expect(endState.isAuth).toBeTruthy();
    expect(endState.id).toBe(16);
    expect(endState.email).toBe("testEmail");
    expect(endState.login).toBe("testLogin");
});
