import React, {Component} from 'react';
import {Menu, Container, Header, Icon, Grid, List, Checkbox} from 'semantic-ui-react';

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
  }

  handleSelectedListChange(index) {
    this.setState(prevState => ({
      selectedList: prevState.lists[index]
    }));
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
          <Grid container>
            <Grid.Column width={6}>
              <List divided relaxed selection>
                {this.state.lists.map((list, index) =>
                  <List.Item key={index} onClick={(e, d) => this.handleSelectedListChange(index)}>
                    <List.Content>
                      <List.Header>{list.name}</List.Header>
                      <List.Description>Updated: {list.updated} ago</List.Description>
                    </List.Content>
                  </List.Item>
                )}
              </List>
            </Grid.Column>
            <Grid.Column width={10}>
              {this.state.selectedList !== null && (
                <div>
                  <Header as="h2">{this.state.selectedList.name}</Header>
                  <List divided relaxed>
                    {this.state.selectedList.items.map((item, index) =>
                      <List.Item key={index}>
                        <Checkbox toggle checked={item.done} label={item.name}/>
                      </List.Item>
                    )}
                  </List>
                </div>
              )}
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
