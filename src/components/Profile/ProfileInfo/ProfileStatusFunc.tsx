import React, {useEffect, useState} from 'react';

type PropsType = {
    statusText: string,
    updateStatusTC: (status: string) => void,
}

const ProfileStatusFunc = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [statusText, setStatusText] = useState(props.statusText)

    useEffect(() => {
        setStatusText(props.statusText)
    }, [props.statusText])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(statusText)
    }
    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        setStatusText(e.currentTarget.value)
    }

    /*componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.statusText !== this.props.statusText){
            this.setState({statusText: this.props.statusText})
        }
    }*/

    return (
        <div>
            {editMode
                ? <div><input onChange={onStatusChange}
                              onBlur={deactivateEditMode}
                              type="text"
                              value={statusText}
                              className="form-control"/></div>
                : <div>
                    <h3>
                        <span className="form-control-plaintext"
                                 onDoubleClick={activateEditMode}>{props.statusText || "------"}</span>
                    </h3>
                </div>}
        </div>
    )
}

export default ProfileStatusFunc