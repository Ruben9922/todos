import React, {Component} from "react";
import {Checkbox, Divider, Form, Header, List} from "semantic-ui-react";
import update from "immutability-helper";
import "./ItemsComponent.css";

// TODO: Give each item an ID & move done items to bottom
class ItemsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItemName: ""
    };

    this.handleDoneChanged = this.handleDoneChanged.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleDoneChanged(event, {checked}, index) {
    const {lists, selectedIndex} = this.props;

    if (selectedIndex !== null) {
      let updatedLists = update(lists, {[selectedIndex]: {items: {[index]: {done: {$set: checked}}}}});
      console.log(updatedLists);
      this.props.onListsChange(updatedLists);
    }
  }

  handleChange(event, {name, value}) {
    this.setState({
      [name]: value
    });
  }

  handleAddItem() {
    const {lists, selectedIndex} = this.props;
    const {newItemName} = this.state;

    if (selectedIndex !== null) {
      let updatedLists = update(lists, {[selectedIndex]: {items: {$push: [{name: newItemName, done: false}]}}});
      this.props.onListsChange(updatedLists);
    }
  }

  render() {
    const {lists, selectedIndex} = this.props;
    const {newItemName} = this.state;
    const selectedList = lists[selectedIndex];

    return selectedIndex !== null && (
      <div>
        <Header as="h2">{selectedList.name}</Header>
        <List divided relaxed>
          {selectedList.items.map((item, index) =>
            <List.Item key={index}>
              <Checkbox toggle checked={item.done} label={<label className={item.done && "done"}>{item.name}</label>}
                        onChange={(e, d) => this.handleDoneChanged(e, d, index)}/>
            </List.Item>
          )}
        </List>
        <Divider/>
        <Form onSubmit={this.handleAddItem}>
          <Form.Group inline>
            <Form.Input label="New item:" placeholder="Buy cookies" name="newItemName" value={newItemName}
                        onChange={this.handleChange}/>
            <Form.Button primary disabled={newItemName === ""}>Add</Form.Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ItemsComponent;
