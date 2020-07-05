

import Main from './pages/Main';
import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="main" hideNavBar={true} component={Main} title="Main" />                    
                </Stack>
            </Router>
        )
    }
}

export default Routes;
