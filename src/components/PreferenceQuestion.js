import React from 'react'

class PreferenceQuestion extends React.Component {
  render() {
    const { question, answerChoices } = this.props

    return (
      <div className="p-3 space-y-5 -my-3">
        <h3 className="font-bold">{question}</h3>
        <div className="flex flex-wrap -mx-2">
          {answerChoices.map((choice, index) => (
            <div key={index} className="flex items-center mb-2 px-2">
              <input type="checkbox" id={`choice-${index}`} className="mr-2" />
              <label htmlFor={`choice-${index}`}>{choice}</label>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default PreferenceQuestion
