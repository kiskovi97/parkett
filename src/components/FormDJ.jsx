import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import styles from './Form.module.css';
import InputFormSimple from './InputFormSimple';

class FormDJ extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
        };
    }

    componentDidMount() {
        const { selectedObject } = this.props;
        this.setState({
            ...selectedObject,
        });
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
            ...selectedObject,
        });
    }

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id === -1) {
            this.addDJ();
        } else {
            this.updateDJ();
        }
    }

    addDJ = () => {
        fetchPost('djs', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateDJ = () => {
        fetchPut('djs', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }


    render() {
        const { selected, title } = this.props;
        const { id, name, content } = this.state;
        const isNew = id === -1;
        return (
            <div className={styles.main}>
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új DJ adatai:' : 'DJ adatai:'}
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={name}
                        name="name"
                        example="DJ Eddy"
                        label="Név"
                    />
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={content}
                        name="content"
                        example="www.example.com"
                        label="Weboldal"
                    />
                    <div className={styles.formgroup}>
                        <button
                            onClick={this.uploadChanges}
                            type="submit"
                            className={styles.submit}
                        >
                            {isNew ? 'DJ hozzáadása' : 'DJ módosítása'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

FormDJ.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormDJ.defaultProps = {
    selected: '',
    title: '',
};

export default FormDJ;
