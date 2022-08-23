import './App.css';

const friends = ['Rachid', 'Taha', 'Hicham', 'Soad', 'Rida'];

const changeColor = function (e) {
  e.target.classList.toggle('redling');
};

const list = (
  <div>
    <h1 className="heading heading--primary">A list of my friends</h1>
    <ul>
      {friends.map(friend => {
        return (
          <li onClick={changeColor}>
            <a href="#" id={'friend__' + friend.toLowerCase()}>
              {' '}
              {friend}{' '}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

const form = (
  <form className="form">
    <label for="number">write a number</label>
    <input type="number" id="number"></input>
    <button type="submit">submit</button>
  </form>
);

const container = (
  <div className="container">
    {list}
    <p>devider</p>
    {form}
  </div>
);

function App() {
  return container;
}

export default App;
