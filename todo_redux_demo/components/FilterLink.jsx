/**
 * Created by xiaosong 2017/09/01
 * **/

import React from 'react';
import {connect} from "react-redux";
import { setVisibility } from "../actions";
import PropTypes from 'prop-types'


const FilterLink = ({active, children, onClick}) => (
    <div className="todo-tab_item">
        <a href="#" style={{ color: active? '#f01414' : '#4d555d' }}
           onClick={(e) => {
               e.preventDefault()
               onClick()
           }}>
            {children}
        </a>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibility(ownProps.filter))
        }
    }
}

FilterLink.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)