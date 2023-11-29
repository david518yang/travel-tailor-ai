import React from 'react'

class PreferenceQuestion extends React.Component {
  render() {
    const { question, answerChoices } = this.props

    return (
      <div className="p-6">
        <h3>{question}</h3>
        {answerChoices.map((choice, index) => (
          <div key={index} className="flex items-center mb-6">
            <input type="checkbox" id={`choice-${index}`} className="mr-2" />
            <label htmlFor={`choice-${index}`}>{choice}</label>
          </div>
        ))}
      </div>
    )
  }
}

export default PreferenceQuestion
