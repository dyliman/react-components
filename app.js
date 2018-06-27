class GroceryListItem extends React.Component {
  
	constructor(props){
		super(props);
		this.state = {done: false};
	}

	onListItemHover() {
	    this.setState({
	      done: !this.state.done
	    });
    }


	render(){

	    var style = {
	      fontWeight: this.state.done ? 'bold' : 'normal'
	    };

		return (
		<li
		 style={style}
		 onMouseOver={this.onListItemHover.bind(this)}
		>
		 {this.props.items} 
		</li>
		)
	}
};



var GroceryList = (props) => (
  <ul>
	  {props.items.map(items =>
	  	<GroceryListItem items={items} />
	  )}
  </ul>
);

ReactDOM.render(<GroceryList items={['Kale','Cucumber','Vegetable']}/>, document.getElementById('app')); 