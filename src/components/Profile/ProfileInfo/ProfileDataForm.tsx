import React, {Dispatch, SetStateAction} from 'react';
import {Field, reduxForm} from "redux-form";
import {SubmitHandler, InjectedFormProps} from "redux-form/lib/reduxForm";
import {Input} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../../utils/validators/validators";
import styles from "../../common/FormsControls/FormsControls.module.css";
import {log} from "util";

type PropsType = {
    profile: ProfileDataType | null
    setEditMode: Dispatch<SetStateAction<boolean>>
    handleSubmit?: SubmitHandler
    error?: string
}

type ProfileDataType = {
    aboutMe: string | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    photos: {
        small: string | null,
        large: string | null
    }
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataType, PropsType> & PropsType> = (props: PropsType) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Full name"}
                   component={Input}
                   name={'fullName'}
                   validate={[requiredField]}
                   className="form-control"/>
        </div>
        <div>
            <Field placeholder={"About me"}
                   component={Input}
                   name={'aboutMe'}
                   validate={[requiredField]}
                   className="form-control"/>
        </div>
        <div>
           Loking for a job? <Field type={"checkbox"}
                   component={Input}
                   name={'lookingForAJob'}/>
        </div>
        <div>
            <Field placeholder={"Looking for a job description"}
                   component={Input}
                   validate={[requiredField]}
                   name={'lookingForAJobDescription'}
                   className="form-control"/>
        </div>
        <div><b>Contacts:</b></div>
        <div>
            <Field placeholder={"Facebook"}
                   component={Input}
                   name={'contacts.facebook'}
                   className="form-control"/>
        </div>
        <div>
            <Field placeholder={"Website"}
                   component={Input}
                   name={'contacts.website'}
                   className="form-control"/>
        </div>
        <div>
            <Field placeholder={"VK"}
                   component={Input}
                   name={'contacts.vk'}
                   className="form-control"/>
        </div>
        <div>
            <Field placeholder={"Twitter"}
                   component={Input}
                   name={'contacts.twitter'}
                   className="form-control"/>
        </div>
        <div>
            <Field placeholder={"Instagram"}
                   component={Input}
                   name={'contacts.instagram'}
                   className="form-control"/>
        </div>
        <div>
            <Field placeholder={"YouTube"}
                   component={Input}
                   name={'contacts.youtube'}
                   className="form-control"/>
        </div>
        <div>
            <Field placeholder={"Main Link"}
                   component={Input}
                   name={'contacts.mainLink'}
                   className="form-control"/>
        </div>
        {console.log(props.error)}
        {props.error && <div className={styles.formSummaryError}><span>{props.error}</span></div>}
        <button className="btn btn-primary">Send</button>
    </form>
}

export const ProfileDataReduxForm = reduxForm<ProfileDataType, PropsType>({form: 'profileForm'})(ProfileDataForm)