import React from 'react';
import {Cube} from 'react-preloaders';

export default class BigPreloader extends React.Component {
    componentWillUnmount() {
        const body = document.getElementsByTagName('body')[0];
        body.style.position = '';
        body.style.overflow = '';
    }

    render() {
        return <Cube color={'#F9B90E'} background={'#17458B'}/>
    }
}
