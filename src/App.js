import React, {Component} from 'react';
import {Container, Grid, Header, Icon, Menu} from 'semantic-ui-react';
import ListComponent from './ListComponent';
import ItemsComponent from "./ItemsComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [
        {
          name: "A list",
          updated: "1w",
          items: [
            {
              name: "Item 1",
              done: false
            },
            {
              name: "Item 2",
              done: false
            },
            {
              name: "Item 3",
              done: false
            }
          ]
        },
        {
          name: "Another list",
          updated: "1m",
          items: [
            {
              name: "Item 4",
              done: false
            },
            {
              name: "Item 5",
              done: true
            },
            {
              name: "Item 6",
              done: false
            }
          ]
        },
        {
          name: "Yet another list",
          updated: "2y",
          items: [
            {
              name: "Item 7",
              done: true
            },
            {
              name: "Item 8",
              done: false
            },
            {
              name: "Item 9",
              done: false
            }
          ]
        }
      ],
      selectedList: null
    };

    this.handleSelectedListChange = this.handleSelectedListChange.bind(this);
    this.handleListsChange = this.handleListsChange.bind(this);
  }

  handleListsChange(lists) {
    this.setState({
      lists
    });
  }

  handleSelectedListChange(selectedList) {
    this.setState({selectedList: selectedList});
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
              <ListComponent lists={this.state.lists} selectedList={this.state.selectedList}
                             onSelectedListChange={this.handleSelectedListChange}/>
            </Grid.Column>
            <Grid.Column width={10}>
              <ItemsComponent lists={this.state.lists} selectedList={this.state.selectedList}
                              onListsChange={this.handleListsChange}
                              onSelectedListChange={this.handleSelectedListChange}/>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
