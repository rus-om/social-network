import React from 'react';
import {reduxForm, Field} from "redux-form";
import {InjectedFormProps, SubmitHandler} from "redux-form/lib/reduxForm";
import {Input} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {loginTC} from "../../redux/authReducer";
import {Redirect} from "react-router";
import styles from "../common/FormsControls/FormsControls.module.css";

function Login(props: LoginStatePropsType & LoginDispatchPropsType) {
    const onSubmit = (formData: any) => {
        props.loginTC(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

type LoginFormPropsType = {
    handleSubmit: SubmitHandler
    error?: string
}

type formDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormOwnProps = {
    captchaUrl: string | null
}
const maxLength20 = maxLengthCreator(20)

const LoginForm: React.FC<InjectedFormProps<formDataType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       component={Input}
                       validate={[requiredField, maxLength20]}
                       name={'login'}
                       className="form-control"/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       type={"password"}
                       component={Input}
                       validate={[requiredField, maxLength20]}
                       name={'password'}
                       className="form-control"/>
            </div>
            {error && <div className={styles.formSummaryError}><span>{error}</span></div>}
            <div>
                <Field type={"checkbox"}
                       component={'input'}
                       name={'rememberMe'}
                /> Remember Me
            </div>
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && <div>
                <Field placeholder={"Captcha"}
                       component={Input}
                       validate={[requiredField]}
                       name={'captcha'}
                       className="form-control"/>
            </div>}

            <div>
                <button className="btn btn-outline-primary">Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<formDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppRootStateType): LoginStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

const LoginContainer = connect<LoginStatePropsType,
    LoginDispatchPropsType, {}, AppRootStateType>(mapStateToProps, {loginTC})(Login)

type LoginStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type LoginDispatchPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export default LoginContainer