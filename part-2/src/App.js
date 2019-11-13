import React, {Component} from 'react';
import SidebarTop from './SidebarTop';
import SidebarMiddle from './SidebarMiddle';
import SidebarFooter from './SidebarFooter';
import {ReactComponent as GirlIcon} from './icons/girl.svg'
import {ReactComponent as StudentIcon} from './icons/student.svg'
import {ReactComponent as EllipsisIcon} from './icons/ellipsis.svg'

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
          height: 32,
          paddingTop: 7,
          paddingLeft: 16,
          fontSize: 13,
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center'
        }}>
          <div>💡 Account Solutions</div>

          <div style={{
            display:'flex'
          }}>
            <StudentIcon style={{
              height: 25,
              width: 25,
              borderRadius: '100%',
              backgroundColor: 'blue',
              opacity: .2,
              marginTop:-3
            }}/>
            <GirlIcon style={{
                height: 25,
               
                marginLeft: -7,
                borderRadius: '100%',
                backgroundColor: 'blue',
                opacity: .2,
                marginTop:-3
            }}/> 
            <div style={{
              marginRight: 10,
              marginLeft:15
            }}>
              Share
            </div> 
            <div style={{
              marginRight: 12
            }}>
              Favorite
            </div>
            <EllipsisIcon style={{
              width: 20,
              height:20,
              marginRight: 10
            }} />
          </div>
        </header>




        <article style={{
          flexGrow:3,
          backgroundColor: 'teal',
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