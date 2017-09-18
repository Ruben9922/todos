import React, {Component} from "react";
import {Checkbox, Form, Grid, Header, Input, List, Segment} from "semantic-ui-react";
import update from "immutability-helper";
import "./ItemsComponent.css";

// TODO: Give each item an ID & move done items to bottom
class ItemsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItemName: "",
      edit: false,
      placeholder: ItemsComponent.choosePlaceholder()
    };

    this.handleDoneChanged = this.handleDoneChanged.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleItemNameChanged = this.handleItemNameChanged.bind(this);
  }

  handleDoneChanged(event, {checked}, index) {
    const {lists, selectedIndex} = this.props;

    if (selectedIndex !== null) {
      let updatedLists = update(lists, {[selectedIndex]: {items: {[index]: {done: {$set: checked}}}}});
      console.log(updatedLists);
      this.props.onListsChange(updatedLists);
    }
  }

  handleChange(event, data) {
    this.setState({
      [data.name]: data.type === "checkbox" ? data.checked : data.value
    });
  }

  static choosePlaceholder() {
    const placeholders = ["Buy cookies", "Order pizza", "Do coding"];
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  }

  addItem() {
    const {lists, selectedIndex} = this.props;
    const {newItemName} = this.state;

    if (selectedIndex !== null) {
      let updatedLists = update(lists, {[selectedIndex]: {items: {$push: [{name: newItemName, done: false}]}}});
      this.props.onListsChange(updatedLists);
    }
  }

  handleItemNameChanged(event, {value}, index) {
    const {lists, selectedIndex} = this.props;

    let updatedLists = update(lists, {[selectedIndex]: {items: {[index]: {name: {$set: value}}}}});
    this.props.onListsChange(updatedLists);
  }

  handleSubmit() {
    this.addItem();

    this.setState({
      newItemName: "",
      placeholder: ItemsComponent.choosePlaceholder()
    });
  }

  render() {
    const {lists, selectedIndex} = this.props;
    const {newItemName, edit, placeholder} = this.state;
    const selectedList = lists[selectedIndex];

    return selectedIndex !== null && (
      <div>
        <Header as="h2">{selectedList.name}</Header>
        <Segment inverted>
          <Form inverted>
            <Form.Checkbox type="checkbox" checked={edit} label="Edit" name="edit" onChange={this.handleChange}/>
          </Form>
        </Segment>
        <List divided relaxed>
          {selectedList.items.map((item, index) => {
            let listItemChild = edit ? (
              <Grid verticalAlign="middle">
                <Grid.Column width={2}>
                  <Checkbox toggle checked={item.done} onChange={(e, d) => this.handleDoneChanged(e, d, index)}/>
                </Grid.Column>
                <Grid.Column width={14}>
                  <Input value={item.name} placeholder={"Item #" + (index + 1)}
                         onChange={(e, d) => this.handleItemNameChanged(e, d, index)}/>
                </Grid.Column>
              </Grid>
              ) : (
                <Checkbox toggle checked={item.done} label={<label className={item.done && "done"}>{item.name}</label>}
                          onChange={(e, d) => this.handleDoneChanged(e, d, index)}/>
              );
            return (
              <List.Item key={index}>
                {listItemChild}
              </List.Item>
            );
            }
          )}
        </List>
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Group inline>
              <Form.Input label="New item:" placeholder={placeholder} name="newItemName" value={newItemName}
                          onChange={this.handleChange}/>
              <Form.Button primary disabled={newItemName === ""}>Add</Form.Button>
            </Form.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default ItemsComponent;
