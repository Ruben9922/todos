import React, {Component} from "react";
import {Checkbox, Header, List} from "semantic-ui-react";

class ItemsComponent extends Component {
  constructor(props) {
    super(props);

    this.handleDoneChanged = this.handleDoneChanged.bind(this);
  }

  handleDoneChanged(event, data, item, index) {
    const checked = data.checked;
    let updatedItem = Object.assign({}, item, {done: checked});
    let updatedItems = this.props.selectedList.items.slice();
    updatedItems.splice(index, 1, updatedItem);
    let updatedList = Object.assign({}, this.props.selectedList, {items: updatedItems});
    console.log(updatedList);
    this.props.onSelectedListChange(updatedList);
  }

  render() {
    return this.props.selectedList !== null && (
      <div>
        <Header as="h2">{this.props.selectedList.name}</Header>
        <List divided relaxed>
          {this.props.selectedList.items.map((item, index) =>
            <List.Item key={index}>
              <Checkbox toggle checked={item.done} label={item.name}
                        onChange={(e, d) => this.handleDoneChanged(e, d, item, index)}/>
            </List.Item>
          )}
        </List>
      </div>
    );
  }
}

export default ItemsComponent;
