import React, { Component } from 'react';
import Link from 'next/link';
import _ from 'underscore';

export class Layout extends Component {
  isActive(className) {
    if (_.isEqual(this.props.className, className)) {
      return 'active';
    }
  }

  render() {
    return (
      <div id="Surface" className={this.props.className}>
        <header className="page-header">
          <img src={require('../static/images/avatar.png')} />
          <ul>
            <li className={this.isActive('About')}>
              <Link href="/">
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/yasaricli">
                <a target='_blank'>github</a>
              </Link>
            </li>
            <li className={this.isActive('Contact')}>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
