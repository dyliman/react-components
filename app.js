var GroceryListItem = (props) => {
  
var onListItemClick = (event) => {
  console.log('I got clicked!');
};

return (
<ul>
	<li var onClick = {onListItemClick}>{props.items[0]}</li>
    <li>{props.items[1]}</li>
</ul>
);
};



var GroceryList = () => (
  
  <GroceryListItem items={['Cucumber', 'Kale']} />
  
);

ReactDOM.render(<GroceryList />, document.getElementById('app')); 