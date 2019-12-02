import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { storage } from '../utils/util.js';

export default class Home extends Component{
    render(){
        return(
					  storage.getStorage('user')===null?
            <Redirect to="/login"/>:
            <Redirect to="/app"/>
        )
    }
}