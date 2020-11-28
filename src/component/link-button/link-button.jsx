import React, {Component} from 'react';
import "./link-button.less";

export default class LinkButton extends Component {

    render() {
        return (
            <button className="link-button" {...this.props}>{this.props.children}</button>
        );
    }

}