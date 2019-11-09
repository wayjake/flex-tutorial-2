import React, {Component} from 'react';
import {ReactComponent as SearchIcon} from './icons/search.svg'
import './App.css';

class CompanyName extends Component{
  render(){
    return (
      <div style={{
        padding: '15px 0px 16px 16px',
        display: 'flex'
      }}>
        <div style={{
          borderRadius: 3,
          background: 'rgba(55, 53, 47, 0.4)',
          fontSize: 12,
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.9)',
          width: 14,
          height: 15,
          padding: '1px 0px 3px 4px'
        }}>
          D
        </div>
        
        <div style={{
          fontSize: 14,
          marginLeft: '5px',
          fontWeight: 600
        }}>
          Dubsado
        </div>
      </div>
    )
  }
}

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

        <div style={{
          height: 110
        }}>
          <CompanyName />

          <div>
            <SearchIcon style={{
              width: 12,
              fill: 'rgba(55, 53, 47, 0.4)'
            }}/> Search
          </div>
        </div>

        <div style={{
          flexGrow:2
        }}>Item 2</div>
          
        <footer style={{
          background: 'lightgreen',
          height: 30
        }}>Footer</footer>
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
        <article class="main" style={{
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
