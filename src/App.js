import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SwaggerUI from 'swagger-ui';
import Sidebar from './Sidebar.js'
import Landing from './Landing.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        definitionList: null,
        definitionLink: null,
        apiDetail: null
      }
      this.swaggerhub = this.swaggerhub.bind(this)
      this.getOrganizationData = this.getOrganizationData.bind(this)
      this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
    }

  componentWillMount() {
    this.setState({

    })
  }

  componentDidUpdate() {
     if(this.state.definitionLink) {
        SwaggerUI({
            domNode: document.getElementById("api-data"),
            url: this.state.definitionLink
          })
     } else {
        ReactDOM.render(
            <Landing
                definitionList={this.state.definitionList}
                apiDetail={this.state.apiDetail}
                updateDefinitionLink={this.updateDefinitionLink}
            />, document.querySelector('#api-data'));
     }

  }

  swaggerhub() {
    let url = "/api-definitions/";
    return fetch(url, {
        method: "GET"
    }).then(response => {
      if (response.ok) {
        return response.json()
      } throw new Error('There was an issue requesting the API')
    }).then(json => {
      return json
    })
  }

  getOrganizationData() {
    this.swaggerhub('GET').then(response => {
      const { apis, ...results} = response;
      this.setState({
        apiDetail: results,
        definitionList: apis
      })
    })
  }



  updateDefinitionLink(newLink) {
    this.setState({
      definitionLink: newLink
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          apiDetail={this.state.apiDetail}
          definitionList={this.state.definitionList}
          definitionLink={this.state.definitionLink}
          updateDefinitionLink={this.updateDefinitionLink}
          getOrganizationData={this.getOrganizationData}
        />
        <div id="api-data" />
      </div>
    );
  }
}

export default App;
