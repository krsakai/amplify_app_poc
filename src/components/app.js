import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// const App = () => {
//   const personList = [
//     {name: "k_sakai1", age: 10},
//     {name: "k_sakai2", age: 20},
//     {name: "k_sakai3"}
//   ]
//   return (
//     <React.Fragment>
//       {
//         personList.map((person, index) => {
//           return <User key={index} name={person.name} age={person.age}/>
//         })
//       }
//     </React.Fragment>
//   )
// }
// const User = (person) => {
//   return <div>名前：{person.name} 年齢：{person.age}</div>
// }

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

// User.defaultProps = {
//   age: 5
// }


class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>count: {props.value}</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

export default connect(mapStateToProps, null)(App)

