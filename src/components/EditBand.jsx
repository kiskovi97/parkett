import React from 'react';
import SelectableElement from './SelectableElement';
import FormBand from './FormBand';
import { fetchAll } from './FetchFunctions';
import styles from './Editor.module.css';
import Plus from './plus.svg';

class EditBand extends React.Component {
    constructor() {
        super();
        this.state = {
            bands: [],
            selectedId: 0,
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.createBand();
        this.fetchBands();
    }

    editBand = (id) => {
        const { bands } = this.state;
        const selected = bands.find(band => band.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (
                <FormBand
                    selectedObject={selected}
                    fetchFunction={this.fetchBands}
                />
            ),
        });
    }

    createBand = () => {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormBand
                    selectedObject={{
                        id: -1,
                    }}
                    fetchFunction={this.fetchBands}
                />),
        });
    }

    fetchBands = () => {
        fetchAll('bands').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ bands: myJson });
        });
    }

    render() {
        const { bands, selectedObject, selectedId } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div
                            className={styles.selectable}
                            onClick={this.createBand}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img src={Plus} className={styles.addElement} alt="" />
                            {'Új Zenekar'}
                        </div>
                        {bands.map(
                            band => (
                                <SelectableElement
                                    title={band.name}
                                    onClick={() => this.editBand(band.id)}
                                    selected={band.id === selectedId}
                                />
                            ),
                        )}
                    </div>
                    <div className={styles.selected}>
                        {selectedObject}
                    </div>
                </div>
            </div>
        );
    }
}

export default EditBand;