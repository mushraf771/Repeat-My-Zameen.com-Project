
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const PrivateRoute = ({ auth: { isAuthenticated, loading } }) => {
    if (!loading) {
    return  isAuthenticated ? <Outlet /> : <Navigate to="/login" /> 
}
    else {
        return <h2> jjjjjjjjjjjj</h2>
    }    
    }
PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);