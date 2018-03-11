import React from 'react'
import { notificationChange } from './../reducers/notificationReducer'
import { voteAnecdote } from './../reducers/anecdoteReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  handleClick = (id, content) => {
    this.props.voteAnecdote(id)
    this.props.notificationChange('you voted "' + content + '"')
    setTimeout(() => {
      this.props.notificationChange(null)
    }, 5000)
  }
  render() {
    const anecdotes = this.props.anecdotes
      .filter(a => a.content
        .toLowerCase()
        .includes(this.props.filter
          .toLowerCase()))
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.handleClick(anecdote.id, anecdote.content)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  notificationChange,
  voteAnecdote
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
