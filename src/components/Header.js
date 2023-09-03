import React from 'react'
import PropTypes from 'prop-types';
const Header = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}

export default Header;

Header.defaultProps={
    title:'Learning React From CodeWithHarry'
} 

Header.propTypes={
    title: PropTypes.string
}


