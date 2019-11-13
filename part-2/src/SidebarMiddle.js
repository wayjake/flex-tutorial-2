import React, {Component} from 'react';
import {ReactComponent as DownIcon} from './icons/down.svg'
import {ReactComponent as EllipsisIcon} from './icons/ellipsis.svg'

export default class SidebarMiddle extends Component{
    workspaceLinks = [
      {
        'icon':'👨‍👩‍👧‍👧',
        'title': 'Meetings'
      },
      {
        'icon':'👩‍💻',
        'title': 'Software Development'
      },
      {
          'icon':'👨‍🚒',
          'title':'Support Issue Tracker'
      },
      {
          'icon':'🛠',
          'title':'Support Manual'
      },
      {
          'icon':'💡',
          'title':'Account Solutions'
      },
      {
          'icon':'🏈',
          'title':'Beta Group'
      },
      {
          'icon':'🤳',
          'title':'Product'
      },
      {
          'icon':'🎨',
          'title':'UI/UX Design'
      },
      {
          'icon':'✌',
          'title':'Overheard Dubsado'
      },
      {
          'icon':'🎒',
          'title':'Task List'
      }
    ]
    sharedLinks = [
        {
            'icon':'⚡',
            'title': '4d2'
        },
        {
            'icon':'🥇',
            'title': 'Waco Marathon'
        },
        {
            'icon':'🕶',
            'title': 'Creative'
        },
        {
            'icon':'☕',
            'title': 'It\'s Always Tea Time'
        },
        {
            'icon':'⛰',
            'title': 'Summit'
        },
        {
            'icon':'💪',
            'title': 'Shut Up and Do Something'
        },
        {
            'icon':'🏖',
            'title': 'July 1, 2019'
        },
        {
            'icon':'⛷',
            'title': 'Features'
        },
        {
            'icon':'⛷',
            'title': 'How Dubsado Does Customer Service'
        },
        {
            'icon':'👩‍💻',
            'title': 'August 28, 2019'
        },
        {
            'icon':'🙋',
            'title': 'You May Proceed'
        },
        {
            'icon':'😇',
            'title': 'IG POST MOVEMENT'
        },
        {
            'icon':'📸',
            'title': 'Summer Photoshoot'
        },
        {
            'icon':'😎',
            'title': 'Software Developer'
        },
        {
            'icon':'👖',
            'title': 'Product'
        },
        {
            'icon':'💰',
            'title': 'Internal Team Reviews'
        },
        {
            'icon':'🏆',
            'title': 'Support'
        },
        {
            'icon':'📎',
            'title': 'Developer Reviews'
        },
        {
            'icon':'🎉',
            'title': 'Team Reviews'
        },
        {
            'icon':'💌',
            'title': 'Winter Shoot Style Guide'
        },
        {
            'icon':'👯',
            'title': 'Audience'
        },
        {
            'icon':'💆',
            'title': 'Team Leader Hub'
        },
        {
            'icon':'💵',
            'title': 'Finance'
        },
        {
            'icon':'💾',
            'title': '3 Year Timeline'
        }
    ];
    privateLinks = [
        {
            'icon':'📙',
            'title': 'Projects'
        },
        {
            'icon': '👨‍💻',
            'title': 'Journal'
        },
        {
            'icon':'📘',
            'title': 'Goals'
        }
    ]
    render(){
      return(
        <div style={{
          flexGrow:2,
          display: 'flex',
          flexFlow: 'column',
          height: '100%',
          overflow: 'auto'
        }}>
          <SidebarInnerWrapper items={this.workspaceLinks} text="Workspace" />          
          <SidebarInnerWrapper items={this.sharedLinks} text="Shared" />
          <SidebarInnerWrapper items={this.privateLinks} text="Private" />
        </div>
      );
    }
  }
  
  class SidebarInnerWrapper extends Component{

    constructor() {
        super();
        
        this.state = {
          isOpen: false
        };
    }

    onHeaderClicked = () => {
        const isOpen = !this.state.isOpen;
        localStorage.setItem(this.props.text + '_isOpen', JSON.stringify(isOpen));
        this.setState({ isOpen: isOpen });
    }

    componentDidMount(){
        let localStorageValue = localStorage.getItem(this.props.text + '_isOpen');
        let isOpen = false;
        if (localStorageValue){
            isOpen = JSON.parse(localStorageValue)
        }
        this.setState({
          isOpen
        });
    }

    render(){

      return(
        <div style={{
            marginTop: 5,
            marginBottom: this.state.isOpen ? 15 : 5,
            height: this.state.isOpen ? 'auto' : 15,
            overflowY: this.state.isOpen ? 'initial' : 'hidden'
        }}>
            <SidebarHeader text={this.props.text} onHeaderClicked={this.onHeaderClicked} />
            {this.props.items.map((link, key) => 
                <DropdownParent icon={link.icon} title={link.title} key={key} />
            )}
        </div>
      );
    }
  }
  
  class SidebarHeader extends Component{

    constructor() {
        super();
        this.state = {
          isMouseInside: false
        };
    }
    mouseEnter = () => {
        this.setState({ isMouseInside: true });
    }
    mouseLeave = () => {
        this.setState({ isMouseInside: false });
    }
    onClick = () => {
        this.props.onHeaderClicked();
    }

    render(){
      return(
        <div style={{
            textTransform: 'uppercase',
            userSelect: 'none',
            WebkitFontSmoothing: 'auto',
            color: 'rgba(55, 53, 47, 0.4)',
            fontSize: 11.5,
            paddingLeft: 13,
            marginBottom: 3
        }}>
          <span 
            onMouseEnter={this.mouseEnter} 
            onMouseOut={this.mouseLeave} 
            onMouseDown={this.onClick} 
            style={{
                background: this.state.isMouseInside ? 'rgba(55, 53, 47, .08)' : 'initial', //when hovered
                transition: 'background 120ms ease-in 0s',
                padding: 3,
                borderRadius: 7,
                cursor: 'pointer'
            }}>
            {this.props.text}
         </span>
        </div>
      );
    }
  }
  
  class DropdownParent extends Component{

    constructor() {
        super();
        this.state = {
          isMouseInside: false
        };
    }
    mouseEnter = () => {
        this.setState({ isMouseInside: true });
    }
    mouseLeave = () => {
        this.setState({ isMouseInside: false });
    }

    render(){
      return(
        <div style={{
                display:'flex',
                paddingLeft: 17,
                paddingTop: 3,
                paddingBottom: 3,
                backgroundColor:  this.state.isMouseInside ? 
                    'rgba(55, 53, 47, 0.08)' : 'initial'
            }}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}>

            <DownIcon style={{
                width: 10,
                height: 20,
                fill:  'rgba(55, 53, 47, 0.4)',
                transform: 'rotate(270deg)' //turned to the right
            }}/> 

            <span style={{
                fontSize: 13,
                width: 20,
                marginLeft: 12
            }}>
                {this.props.icon} 
            </span>

            <span style={{
                marginLeft: 7,
                //color: 'rgb(55, 53, 47)', //active
                color: 'rgba(25, 23, 17, 0.6)',
                fontWeight: 600,
                fontSize: 14,
                flexGrow: 1
            }}>
                {this.props.title}
            </span>

            <UtilityPopup showElipses={this.state.isMouseInside} />
            
        </div>
      );
    }
  }

  class UtilityPopup extends Component{
    constructor() {
        super();
        this.state = {
          isMouseInside: false,
          open: false
        };
    }
    mouseEnter = () => {
        this.setState({ isMouseInside: true });
    }
    mouseLeave = () => {
        this.setState({ isMouseInside: false });
    }

    buttonClicked = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        return(
        <div style={{
            position:'relative'
        }}>
            <EllipsisIcon style={{
                    width: 15,
                    height: 15,
                    fill:'rgba(55, 53, 47, 0.6)',
                    marginRight: 17,
                    cursor: 'pointer',
                    opacity: this.props.showElipses ? 1 : 0
                }}
                onClick={this.buttonClicked}
            /> 
            {this.state.open && <div style={{
                height: 100,
                position: 'absolute',
                top: 20,
                padding: 20,
                width: 150,
                margin: 0,
                background: '#ccc',
                maxWidth: 'calc(100vw - 24px)',
                boxShadow: 'rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px',
                borderRadius: 3,  
                zIndex: 1
            }}>
                Inner
            </div> }
        </div>
        );
    }
  }
