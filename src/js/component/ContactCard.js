import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Context } from "../store/appContext";

export const ContactCard = ({ name, address, phone, email, id, ...props }) => {
    const { store, actions } = useContext(Context);
    const [contactCardSate, setContactCardSate] = ("")
    const navigate = useNavigate()
    function deleteContact({ id }) {
        props.onDelete(id)
    }
    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <div className=" float-right">
                        <button className="btn" onClick={() => navigate('/edit/' + `${id}`)}><i className="fas fa-pencil-alt mr-3"></i></button>
                        <button className="btn" onClick={() => deleteContact(`${id}`)}><i className="fas fa-trash-alt"></i></button>
                    </div>
                    <label className="name lead">{name}</label>
                    <br />
                    <i className="fas fa-map-marker-alt text-muted mr-3"></i>
                    <span className="text-muted">{address}</span>
                    <br />
                    <span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                    <span className="text-muted small">{phone}</span>
                    <br />
                    <span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
                    <span className="text-muted small text-truncate">{email}</span>
                </div>
            </div>
        </li>
    );
};

ContactCard.propTypes = {
    history: PropTypes.object,
    onDelete: PropTypes.func,
};
ContactCard.defaultProps = {
    onDelete: null
};