var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Caleb Guanzon',
      newName: '',
      friends: ['Aaron Shafovaloff', 'Brent Burgoyne', 'Jake Trent']
    }
  },

  setNewName: function(e){
    this.setState({
      newName: e.target.value
    });
  },

  changeName: function(){
    this.setState({
      name: this.state.newName,
      newName: ''
    });
  },

  addFriend: function(friend){
    this.setState({
      friends: [friend].concat(this.state.friends)
    });
  },

  render: function(){
    return (
      <div>
        <h1>{this.state.name} </h1>
        <input value={this.state.newName} onChange={this.setNewName} />
        <button onClick={this.changeName}>Change</button>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(name){
      return <li>{name}</li>
    });

    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {listItems}
        </ul>
      </div>
  )
  }
});

var AddFriend = React.createClass({
  getInitialState: function(){
    return {
      newFriend: ''
    }
  },

  updateNewFriend: function(e){
    this.setState({
      newFriend: e.target.value
    });
  },

  handleAddNew: function(){
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },

  render: function(){
    return (
      <div>
          <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
          <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    )
  } 
});

React.render(<FriendsContainer />, document.getElementById('fc'));

