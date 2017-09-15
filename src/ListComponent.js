import React, {Component} from 'react';
import {List} from 'semantic-ui-react';

class ListComponent extends Component {
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
      ]
    };
  }

  handleSelectedListChange(index) {
    this.props.onChange(this.state.lists[index]);
  }

  render() {
    return (
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
    );
  }
}

export default ListComponent;
