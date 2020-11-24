import React from 'react';

type PropsType = {
    statusText: string,
    updateStatusTC: (status: string) => void,
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        statusText: this.props.statusText,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.statusText)
    }
    onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ statusText: e.currentTarget.value})
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.statusText !== this.props.statusText){
            this.setState({statusText: this.props.statusText})
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div><input onChange={this.onStatusChange}
                                  onBlur={this.deactivateEditMode}
                                  type="text"
                                  value={this.state.statusText}/></div>
                    : <div><span onDoubleClick={this.activateEditMode}>{this.props.statusText || "------"}</span></div>}
            </div>
        )
    }
}

export default ProfileStatus