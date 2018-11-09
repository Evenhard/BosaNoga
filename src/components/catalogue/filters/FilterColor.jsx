import React, {Component} from 'react';

let classNames = require('classnames');

export default class FilterColor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
        };

        this.openHandler = this.openHandler.bind(this);
    }

    openHandler() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const openerClassName = classNames({
            'opener-down': this.state.isOpen,
            'opener-up': !this.state.isOpen
        });

        const showDivClassName = classNames({
            'sidebar__division-body': true,
            'hidden': !this.state.isOpen
        });

        return (
            <section className="sidebar__division">
                <div className="sidebar__color">
                    <div className="sidebar__division-title">
                        <h3>Цвет</h3>
                        <div className={openerClassName} onClick={this.openHandler}/>
                    </div>
                    <div className={showDivClassName}>
                        <ul>
                            {this.props.color.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a onClick={() => this.props.clickHandler(item)}>
                                            <div className={`color ${item.code}`}/>
                                            <span className="color-name">{item.title}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
};