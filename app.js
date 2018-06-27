var GroceryListItem = (props) => (
  <ul>
  <li>{props.items[0]}</li>
  <li>{props.items[1]}</li>
  </ul>
);

var GroceryList = () => (
  
  <GroceryListItem items={['Cucumber', 'Kale']} />
  
);

ReactDOM.render(<GroceryList />, document.getElementById('app')); 