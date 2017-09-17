import React, {Component} from 'react';
import {List} from 'semantic-ui-react';

// TODO: Sort out "Updated: ... ago"
class ListComponent extends Component {
  render() {
    return (
      <List divided relaxed selection>
        {this.props.lists.map((list, index) =>
          <List.Item key={index} onClick={(e, d) => this.props.onSelectedIndexChange(index)}
                     active={this.props.selectedIndex === index}>
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
