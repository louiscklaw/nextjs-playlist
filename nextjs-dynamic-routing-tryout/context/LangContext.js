import React , { Component, createContext } from 'react'

export const LangContext = createContext();

class LangContextProvider extends Component {
  state = {
    active_lang: "en",
    meanings: 'meanings'
  };

  say = (meaning) => {
    return meaning
  }

  render() {
    return (
      <LangContext.Provider value={{
        ...this.state,
        say: this.say
        }}>
        { this.props.children }
      </LangContext.Provider>
    );
  }
}

export default LangContextProvider;
