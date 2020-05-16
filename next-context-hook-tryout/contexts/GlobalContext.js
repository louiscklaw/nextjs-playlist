import React , { Component, createContext } from 'react'

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
  state = {
    helloworld:'helloworld'
  };

  changeTheWorld = (in_text) => {
    this.setState({helloworld: in_text})
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        ...this.state,
        changeTheWorld: this.changeTheWorld
        }}>
        { this.props.children }
      </GlobalContext.Provider>
     );
  }
}

export default GlobalContextProvider;