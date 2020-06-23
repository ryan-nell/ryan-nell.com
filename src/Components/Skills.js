import React, { Component } from 'react'

class Skills extends Component {
    render() {

        const { skills } = this.props
        
        return(
            <div className="skills-container">
                <div className="component-title">
                    <h1>skills</h1>
                </div>
                <div className="skills-div">
                    {
                        skills.map(skill => (
                            <div className="skill-type" key={skill.id}>
                                <img className="skill-logo" src={skill.img} alt={skill.alt}></img>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Skills