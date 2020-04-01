import React from "react";
import { connect } from "react-redux";

class JokesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
  }

  componentDidMount() {
    const { history } = this.props;
    this.setState({
      history: history
    });
  }

  //sort history on redux - default (only 1 param) sorts alphabetically and numerically, reverse does in reverse order
  sort = (param, reverse) => {
    let newList = this.props.history;
    if (reverse === 1 || reverse === "reverse") {
      newList.sort((a, b) => {
        if (a[param] < b[param]) {
          return 1;
        }
        if (a[param] > b[param]) {
          return -1;
        }
        return 0;
      });
    } else {
      newList.sort((a, b) => {
        if (a[param] > b[param]) {
          return 1;
        }
        if (a[param] < b[param]) {
          return -1;
        }
        return 0;
      });
    }
    this.setState({
      history: newList
    });
  };

  render() {
    const { history } = this.state;
    return (
      <div className="page jokes">
        <div className="filters">
          <span
            onClick={e => {
              this.sort("categories");
            }}
          >
            By Category
          </span>
          <span
            onClick={e => {
              this.sort("viewed_at");
            }}
          >
            Most Recent
          </span>
          <span
            onClick={e => {
              this.sort("viewed_at", "reverse");
            }}
          >
            Least Recent
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
function List(props) {
  const { history } = props;
  if (history && history.length)
    return history.map((el, i) => <Joke {...el} key={`joke-history-${i}`} />);
  else return null;
}
// individual jokes
function Joke({value, categories, viewed_at}) {
  const category = categories[0] || "";
  viewed_at = new Date(viewed_at).toLocaleTimeString();
  return (
    <div className="joke">
      <span>{value}</span>
      <span className="category">{category}</span>
      <span>{viewed_at}</span>
    </div>
  );
}
//adds history to props
const mapStateToProps = state => ({
  history: state.history
});

export default connect(mapStateToProps)(JokesPage);
