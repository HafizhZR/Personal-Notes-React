import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            titleCharacterLimit: 50,
            titleCharacterCount: 0,
        };
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;
        const titleCharacterCount = title.length;
        if (titleCharacterCount <= this.state.titleCharacterLimit) {
            this.setState({
                title: title,
                titleCharacterCount: titleCharacterCount,
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState({
            body: event.target.value,
        });
    }

    async onSubmitEventHandler(event) {
        event.preventDefault();
        const isSuccess = await this.props.addNote(this.state);
        if (isSuccess) {
            this.setState({
                title: "",
                body: "",
            });
        }
    }

    render() {
        const remainingCharacters = this.state.titleCharacterLimit - this.state.titleCharacterCount;

        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter: {remainingCharacters}</p>
                <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler}
                />
                <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu disini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}
                />
                <button type="submit">Buat</button>
            </form>
        );
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;
