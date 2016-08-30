function data(state = {}, action) {
  switch (action.type) {
    case 'SIMULACRUM_DATA':
      console.log('SIMULACRUM_DATA reducer', action)
      return Object.assign({}, state, {
        page2: action.value
      })

    default:
      return state
  }
}
export default data
