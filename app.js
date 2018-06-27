var Kale = () => (
  <li>Kale</li>
);

var Cucumber = () => (
  <li>Cucumber</li>
);

var GroceryList = () => (
  <ul>
  <Kale />
  <Cucumber />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app')); 