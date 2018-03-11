import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { notificationChange } from './../reducers/notificationReducer'
import { connect } from 'react-redux'



class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.anecdoteCreation(e.target.anecdote.value)
    e.target.anecdote.value = ''

    this.props.notificationChange('new anecdote created')
    setTimeout(() => {
      this.props.notificationChange(null)
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  anecdoteCreation,
  notificationChange
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)


export default ConnectedAnecdoteForm