import React, {Component} from 'react';
import {List} from 'semantic-ui-react';

class ListComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSelectedListChange = this.handleSelectedListChange.bind(this);
  }

  handleSelectedListChange(index) {
    this.props.onSelectedListChange(this.props.lists[index]);
  }

  render() {
    return (
      <List divided relaxed selection>
        {this.props.lists.map((list, index) =>
          <List.Item key={index} onClick={(e, d) => this.handleSelectedListChange(index)}
                     active={this.props.selectedList === list}>
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
