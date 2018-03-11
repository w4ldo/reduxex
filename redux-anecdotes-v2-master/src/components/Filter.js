import React from 'react'
import { filterChange } from './../reducers/filterReducer'
import { connect } from 'react-redux'



class Filter extends React.Component {
    handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      this.props.filterChange(event.target.value)
    }
    render() {
      const style = {
        marginBottom: 10
      }
      return (
        <div style={style}>
        filter <input onChange={this.handleChange} />
        </div>
      )
    }
}

const ConnectedFilter = connect(
  null,
  { filterChange }
)(Filter)

export default ConnectedFilter