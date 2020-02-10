import "./Nav.css";
import React, { useState } from "react";
import { Menu } from 'semantic-ui-react'

export default props => {
    const [activeItem, setActiveItem] = useState(0)

    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <aside className="menu-area">
        <Menu>
        <Menu.Item href="/"
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item href="/users"
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={handleItemClick}
        >
          Usuários
        </Menu.Item>
        
      </Menu>
    </aside>
    )
}




// import React, { Component } from 'react'
// import { Menu } from 'semantic-ui-react'

// export default class MenuExampleBasic extends Component {
//   state = {}

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu>
//         <Menu.Item
//           name='editorials'
//           active={activeItem === 'editorials'}
//           onClick={this.handleItemClick}
//         >
//           Editorials
//         </Menu.Item>

//         <Menu.Item
//           name='reviews'
//           active={activeItem === 'reviews'}
//           onClick={this.handleItemClick}
//         >
//           Reviews
//         </Menu.Item>

//         <Menu.Item
//           name='upcomingEvents'
//           active={activeItem === 'upcomingEvents'}
//           onClick={this.handleItemClick}
//         >
//           Upcoming Events
//         </Menu.Item>
//       </Menu>
//     )
//   }
// }