import React, {Component} from 'react';
import SidebarTop from './SidebarTop';
import SidebarMiddle from './SidebarMiddle';
import SidebarFooter from './SidebarFooter';

class SideBar extends Component{

  render(){
    return (
      <aside style={{
        width: 250,
        height: '100vh',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
      }}>

        <SidebarTop />
        <SidebarMiddle />
        <SidebarFooter />
          
      </aside>
    )
  }
}

class Main extends Component{

  render(){
    return (
      <div style={{
        display: 'flex',
        flexFlow: 'column wrap',
        width: 'calc(100vw - 250px)',
        height: '100vh',
        maxHeight: '100%'
      }}>
        <header style={{
          height: 40
        }}>Header</header>
        <article style={{
          flexGrow:3,
          backgroundColor: 'teal'
        }}>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
        </article>
      </div>
    );
  }
}

function App() {
  return (
    <div style={{
      display: 'flex'
    }}>
      <SideBar /> 
      <Main />
    </div>
  );
}

export default App;
