import React, {Component} from 'react';
import {Container, Grid, Header, Icon, Menu} from 'semantic-ui-react';
import ListComponent from './ListComponent';
import ItemsComponent from "./ItemsComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedList: null
    };
  }

  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item header link href=".">To-Do List App</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item link href="//rubendougall.co.uk/">
                <Icon name="arrow left"/>
                Back to Main Website
              </Menu.Item>
              <Menu.Item link href="https://github.com/Ruben9922/wordsearch">
                <Icon name="github"/>
                GitHub
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        <div style={{marginTop: "4em"}}>
          <Header as="h1" textAlign="center">To-Do List App</Header>
          <Grid container divided>
            <Grid.Column width={6}>
              <ListComponent selectedList={this.state.selectedList}
                             onSelectedListChange={selectedList => this.setState({selectedList: selectedList})}/>
            </Grid.Column>
            <Grid.Column width={10}>
              <ItemsComponent selectedList={this.state.selectedList}/>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
