import React, {Component} from 'react';
import {ReactComponent as PlusIcon} from './icons/plus.svg'

export default class SidebarFooter extends Component{

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
        return (
            <div
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave} 
                style={{
                    borderTop: '1px solid rgba(55, 53, 47, .08)',
                    height: 45,
                    cursor:'pointer',
                    transition: 'background 120ms ease-in 0s',
                    backgroundColor: this.state.isMouseInside ? 'rgba(55, 53, 47, .08)' : 'initial'
                }}>
                <div style={{
                    marginLeft: 20,
                    marginTop: 12,
                    display: 'flex'
                }}>
                    <PlusIcon style={{
                        height: 11,
                        width: 11,
                        fill:'rgba(55, 53, 47, 0.6)',
                        marginTop: 4
                    }}/>
                    <span style={{
                    color:'rgba(55, 53, 47, 0.6)',
                    marginLeft: 10,
                    fontSize: 14
                    }}>
                        New Page
                    </span>
                </div>
            </div>    
        );
    }
}