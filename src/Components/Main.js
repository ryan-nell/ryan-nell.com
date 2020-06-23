import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Social from './Social.js'

class Main extends Component {
    render() {

        const { myInfo, contact } = this.props

        return(
            <Container className="main-container">
                <Row className="information-div">
                    <div className="display-picture-div">
                        <img className="display-img" src={myInfo.displayPicture} alt="My Display pic"></img>
                    </div>
                    <h1 className="main-title">{myInfo.fullName}</h1>
                    <h3 className="subtitle">{myInfo.subtitle}</h3>
                    {
                        myInfo.socialMedia.map( social => {
                        return <Social key={social.id} social={social} />
                        })
                    }
                </Row>
                {/* <img src={contact.emailIcon} alt={contact.emailAlt}></img>
                <img src={contact.phoneIcon} alt={contact.phoneAlt}></img> */}
            </Container>
        )
    }
}

export default Main