import React from "react";
import { connect } from "react-redux";
import { sort } from "../js";

class JokesPage extends React.Component {
  //#props
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
  }

  //#lifecycle method
  componentDidMount() {
    const { history } = this.props;
    this.setState({
      history: history
    });
  }

  //sort history on redux - (only 1 param) sorts alphabetically or numerically by the arrays key, reverse does in reverse order
  handleSort(key, reverse) {
    //#Curried Function
    const sortedArray = sort(this.props.history)(key, reverse);
    this.setState({
      history: sortedArray
    });
  }

  render() {
    const { history } = this.state;
    return (
      <div className="page jokes">
        <div className="filters">
          <span onClick={e => this.handleSort("categories")}>
            By Category
          </span>
          <span onClick={e => this.handleSort("viewed_at", "reverse")}>
            Most Recent
          </span>
          <span onClick={e => this.handleSort("viewed_at")}>
            First Viewed
          </span>
        </div>
        <h3>All jokes viewed</h3>
        <div className="joke">
          <span>Joke</span>
          <span className="category">Category</span>
          <span>Time</span>
        </div>
        <List history={history} />
      </div>
    );
  }
}
// list of jokes
//#props for function
function List(props) {
  const { history } = props;
  if (history && history.length)
    return history.map((el, i) => <Joke {...el} key={`joke-history-${i}`} />);
  else return null;
}
// individual jokes
function Joke({value, categories, viewed_at}) {
  const category = categories[0] || "";
  //#date
  viewed_at = new Date(viewed_at).toLocaleTimeString();
  return (
    <div className="joke">
      <span>{value}</span>
      <span className="category">{category}</span>
      <span>{viewed_at}</span>
    </div>
  );
}
//adds redux history to #props
const mapStateToProps = state => ({
  history: state.history
});

export default connect(mapStateToProps)(JokesPage);
