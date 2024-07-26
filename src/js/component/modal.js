import React, { useContext } from 'react';
import { Navigate, useNavigate, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';

const Modal = ({modalData}) => {
    const {onClose, show, id} = modalData;
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    function deleteContact(id) {
        actions.deleteContact(id)
            .then(() => onClose())
    }
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: (show) ? 'inline-block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        {(onClose) ?
                            <button onClick={() => onClose()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            : ''
                        }
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Oh no!</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => deleteContact(id)}>Yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    history: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool
};
Modal.defaultProps = {
    show: false,
    onClose: null
};
export default Modal