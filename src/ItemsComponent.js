import React, {Component} from "react";
import {List, Header, Checkbox} from "semantic-ui-react";

class ItemsComponent extends Component {
  render() {
    return this.props.selectedList !== null && (
      <div>
        <Header as="h2">{this.props.selectedList.name}</Header>
        <List divided relaxed>
          {this.props.selectedList.items.map((item, index) =>
            <List.Item key={index}>
              <Checkbox toggle checked={item.done} label={item.name}/>
            </List.Item>
          )}
        </List>
      </div>
    );
  }
}

export default ItemsComponent;
