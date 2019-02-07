import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import styles from './Form.module.css';
import FormSelect from './FormSelect';
import EditTitleAndDate from './EditTitleAndDate';
import EditDetails from './EditDetails';
import EditPoster from './EditPoster';
import EditTeaachingForm from './EditDanceCourseForm';
import FormTextareaInput from './FormTextareaInput';

class EditEventWorkshop extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            photo: '',
            startDate: '',
            endDate: '',
            program: '',
            content: '',
            danceid: 1,
            teacherid: 1,
            theme: '',
            facebookEvent: '',
            applicationForm: '',
            party_id: 1,
            selectedForm: 'title',
            addSelected: null,
        };
    }

    componentDidMount() {
        const { selectedObject } = this.props;
        this.setObject(selectedObject);
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setObject(selectedObject);
    }

    setObject = (selectedObject) => {
        if (selectedObject.id === -1) {
            this.setState({
                id: -1,
            });
        } else {
            const startDate = new Date(selectedObject.start_date);
            const startDateString = startDate.toISOString().slice(0, 16);
            const endDate = new Date(selectedObject.end_date);
            const endDateString = endDate.toISOString().slice(0, 16);
            this.setState({
                startDate: startDateString,
                endDate: endDateString,
                facebookEvent: selectedObject.facebook_event,
                applicationForm: selectedObject.application_form,
                danceid: selectedObject.dance_id,
                teacherid: selectedObject.teacher_id,
                ...selectedObject,
            });
        }
    }

    handleMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(parseInt(options[i].value, 10));
            }
        }
        const { name } = event.target;
        this.setState({ [name]: value });
    }

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    changeTab = (tabName) => {
        this.setState({
            selectedForm: tabName,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { id } = this.state;
        if (id === -1) {
            this.addWorkshop();
        } else {
            this.updateWorkshop();
        }
    }

    addWorkshop = () => {
        const {
            title,
            photo,
            startDate,
            endDate,
            program,
            content,
            danceid,
            teacherid,
            theme,
            facebookEvent,
            applicationForm,
            party_id,
        } = this.state;
        const workshop = {
            title,
            photo,
            start_date: startDate,
            end_date: endDate,
            program,
            content,
            dance_id: danceid,
            dance_teacher_id: teacherid,
            theme,
            facebook_event: facebookEvent,
            application_form: applicationForm,
            party_id,
        };
        fetchPost('workshops', workshop).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateWorkshop = () => {
        const {
            id,
            title,
            photo,
            startDate,
            endDate,
            program,
            content,
            danceid,
            teacherid,
            theme,
            facebookEvent,
            applicationForm,
            party_id,
        } = this.state;
        const workshop = {
            id,
            title,
            photo,
            start_date: startDate,
            end_date: endDate,
            program,
            content,
            dance_id: danceid,
            dance_teacher_id: teacherid,
            theme,
            facebook_event: facebookEvent,
            application_form: applicationForm,
            party_id,
        };
        fetchPut('workshops', workshop, id).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    render() {
        const {
            selectedForm,
            theme,
        } = this.state;
        return (
            <div className={styles.main} key="EditEventparty">
                <div className={styles.steps}>
                    <FormSelect
                        title="title"
                        selected={selectedForm}
                        onClick={() => this.changeTab('title')}
                        label="Alap adatok"
                    />
                    <FormSelect
                        title="poster"
                        selected={selectedForm}
                        onClick={() => this.changeTab('poster')}
                        label="Plakát"
                    />
                    <FormSelect
                        title="details"
                        selected={selectedForm}
                        onClick={() => this.changeTab('details')}
                        label="Leírás és Facebook"
                    />
                    <FormSelect
                        title="dance"
                        selected={selectedForm}
                        onClick={() => this.changeTab('dance')}
                        label="Tanítás és Form"
                    />
                </div>
                <div className={styles.form}>
                    <form onSubmit={this.handleSubmit}>
                        <EditTitleAndDate
                            form="title"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <EditDetails
                            form="details"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <FormTextareaInput
                            selectedForm={selectedForm}
                            form="details"
                            handleChange={this.handleChange}
                            value={theme}
                            name="theme"
                            example="Egész hónapos tudás ..."
                            label="Tematika:"
                        />
                        <EditTeaachingForm
                            form="dance"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <EditPoster
                            form="poster"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <div className="formGroup mySubmitgroup">
                            <input type="submit" value="Mentés" className={styles.submit} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

EditEventWorkshop.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

EditEventWorkshop.defaultProps = {
    selected: '',
    title: '',
};

export default EditEventWorkshop;
