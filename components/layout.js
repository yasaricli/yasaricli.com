import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

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
				<Head>
					<title>{this.props.title} ~ Yaşar İçli</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link
						href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"
						rel="stylesheet"
					/>
				</Head>

				<header className="page-header">
					<img src="/images/avatar.jpeg" />
					
					<ul>
						<li className={this.isActive('About')}>
							<Link href="/">
								<a>about</a>
							</Link>
						</li>
						<li>
							<Link href="//github.com/yasaricli">
								<a target="_blank">github</a>
							</Link>
						</li>
						<li className={this.isActive('Contact')}>
							<Link href="/contact">
								<a>contact</a>
							</Link>
						</li>
					</ul>
				</header>
				<section>{this.props.children}</section>
			</div>
		);
	}
}
