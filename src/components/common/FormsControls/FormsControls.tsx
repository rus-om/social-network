import React from 'react';
import {WrappedFieldProps} from 'redux-form/lib/Field'
import styles from './FormsControls.module.css'

export const Textarea: React.FC<WrappedFieldProps> =
    ({input, meta, ...props}) => {
        const hasError = meta.error && meta.touched
        return (
            <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
                <div>
                    <textarea {...input} {...props} />
                </div>
                {hasError && <span>{meta.error}</span>}
            </div>
        )
    }

export const Input: React.FC<WrappedFieldProps> =
    ({input, meta, ...props}) => {

        const hasError = meta.error && meta.touched
        return (
            <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
                <div>
                    <input {...input} {...props} />
                </div>
                {hasError && <span>{meta.error}</span>}
            </div>
        )
    }