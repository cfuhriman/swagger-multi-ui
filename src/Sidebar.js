import React from 'react';
import APILink from './APILink.js'

const Sidebar = props => {

    let logo = null;
    let apiLinks = [];

    const imageStyle = {
        maxWidth: '8vw'
    }

    if (props.definitionList === null) {
        props.getOrganizationData()
    }
    else {
        logo = props.apiDetail.logo;
        for (let i = 0; i < props.definitionList.length; i++) {
                apiLinks.push(
                    <APILink
                        key={i}
                        activeLink={props.definitionLink === props.definitionList[i].url}
                        apiLinkData={props.definitionList[i]}
                        updateDefinitionLink={props.updateDefinitionLink}
                    />
                )
        }
    }

  return (
    <div className="side-bar">
        <div className="side-bar-header">
            <img style={imageStyle} src={logo} alt="logo"/>
        </div>
        <div className="side-bar-body">
            <h3>API DOCS</h3>
            {apiLinks}
        </div>
    </div>
  )
}

export default Sidebar;