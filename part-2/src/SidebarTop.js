import React, {Component} from 'react';
import {ReactComponent as SearchIcon} from './icons/search.svg'
import {ReactComponent as ClockIcon} from './icons/clock.svg'
import {ReactComponent as SettingsIcon} from './icons/settings.svg'

export default class SidebarTop extends Component{

    upperMenuIconStyles = {
      width: 12,
      height: 12,
      fill: 'rgba(55, 53, 47, 0.4)',
      marginTop: 3
    }
  
    render(){
      return (
        <div style={{
          height: 150
        }}>
          <CompanyName />
  
          <UpperMenuItem text="Search">
            <SearchIcon style={this.upperMenuIconStyles}/> 
          </UpperMenuItem>
  
          <UpperMenuItem text="Updates">
            <ClockIcon style={this.upperMenuIconStyles}/> 
          </UpperMenuItem>
  
          <UpperMenuItem text="Settings">
            <SettingsIcon style={this.upperMenuIconStyles}/> 
          </UpperMenuItem>
        </div>
      )
    }
  }
  
  class CompanyName extends Component{
    render(){
      return (
        <div style={{
          padding: '15px 0px 10px 16px',
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
  
  class UpperMenuItem extends Component {
    
    render(){
      return (
        <div style={{
          paddingLeft: 19,
          marginTop: 7,
          fontSize: 14,
          display: 'flex',
          flexFlow: 'row'
        }}>
  
          {this.props.children}
          <div style={{
            marginLeft: 9,
            color: 'rgba(25, 23, 17, 0.6)',
            fontWeight: 600
          }}>{this.props.text}</div>
        </div>
      );
    }
  }