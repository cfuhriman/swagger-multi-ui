import React from 'react';

const Landing = props => {
    let updateDefinitionLink = props.updateDefinitionLink
    let apiDetail = props.apiDetail;
    let apis = props.definitionList;
    const imageStyle = {
        maxHeight: '10em'
    }

    function setApi() {
        try{
            updateDefinitionLink(apis[0].url)
        } catch (err) {
            alert("Unable to get default API Link");
        }
    }

    return (
        <div className="center-box">
            <div className="center-box-text">
                <h1>{apiDetail.name}</h1>
                <p>{apiDetail.description}</p>

            </div>
            <button className="btn default" onClick={() => setApi()}>Get Started</button>
            <img alt="logo" className="center-box-image" style={imageStyle} src={apiDetail.landingImage} />
        </div>
    )
}

export default Landing;