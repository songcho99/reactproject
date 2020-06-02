import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Ex05_SimpleMenu extends Component {
    constructor(){
        super();
        this.state={
            anchorEl:''
        }
    }
    handleClick=e=>{
        this.setState({
            anchorEl:e.currentTarget
        })
    }
    handleClose=(e)=>{
        console.log('메뉴버튼 id='+e.target.id);
        this.setState({
            anchorEl:''
        })
    }
    render() {
        return (
            <div>
                <Button aria-controls='simple-menu' aria-haspopup='true' onClick={this.handleClick.bind(this)}>Open Menu</Button>
                <Menu id='simple-menu' anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}>
                        <MenuItem onClick={this.handleClose.bind(this)} id='1'>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose.bind(this)} id='2'>My account</MenuItem>
                        <MenuItem onClick={this.handleClose.bind(this)} id='3'>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default Ex05_SimpleMenu;