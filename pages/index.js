import React, { Component } from 'react';
import Link from 'next/link';

import { Layout } from '../components/layout';

// import styles..
import '../styles/styles.less';

const ALL_DEVELOPMENT_START_YEAR = 2004;
const JS_DEVELOPMENT_START_YEAR = 2011;
const CURRENT_YEAR = new Date().getFullYear();

const ALL_YEARS = CURRENT_YEAR - ALL_DEVELOPMENT_START_YEAR;
const JS_YEARS = CURRENT_YEAR - JS_DEVELOPMENT_START_YEAR;

export default class Index extends Component {
	render() {
		return (
			<Layout title="About" className="About">
				<h2>Greetings I am Yaşar;</h2>
				<p>
					For about <b>{ALL_YEARS} years</b> I have been involved in coding, development. During these <b>{ALL_YEARS} years</b>{' '}
					I have worked both as a <b>frontend</b> and <b>backend</b> developer. Thru the years I have been
					worked on many projects involving a variety of coding languages.
				</p>
				<p>
					For the last <b>{JS_YEARS} years</b> I have shifted most of my attention to <b>javascript</b>, especially{' '}
					<a href="//www.meteor.com" target="_blank">
						Meteor Framework
					</a>. This allowed me to progress fairly quickly in my aptitude with <b>javascript</b>. Generally I
					am more interested structure development. Most of my time is spend working on{' '}
					<a href="//github.com/yasaricli" target="_blank">
						Github
					</a>{' '}
					open source projects.
				</p>
				<p>
					Also I like to and do support <b>open source</b> projects.
				</p>
				<p>
					Currently I am working as a frontend developer at{' '}
					<a href="//www.tatilsepeti.com" target="_blank">
						Tatilsepeti
					</a>{' '}
					and I am the <b>core developer</b> of{' '}
					<a href="//www.icerikevreni.com" target="_blank">
						İçerikevreni
					</a>.
				</p>
			</Layout>
		);
	}
}
