import React from 'react'

export const GetContent = ({
  context: Context,
  id
}) => (Component) => {
  return (props) => {
    const {
      theme
    } = props
  
    const module = (theme && theme.main && theme.main.modules && theme.main.modules.filter(filteredItem => filteredItem.id === id))
    const content = (module && module[0].data) || {}

    return <> { props.theme ? <Context.Provider value={ content }>
      <Component { ...props } />
    </Context.Provider> : <Component { ...props } /> } </>
  }
}