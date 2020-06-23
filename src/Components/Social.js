import React, { Component } from 'react';

class Social extends Component {
    render() {
        const { social } = this.props
        return(
            <div className="social-container">
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <img src={social.icon} alt={social.alt}></img>
                </a>
            </div>
        )
    }
}

export default Social