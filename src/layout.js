import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import _ from "underscore";

// components
import Link from "../src/components/activeLink";

export class Layout extends Component {
  render() {
    return (
      <div id="Surface" className={this.props.className}>
        <Head>
          <title>{this.props.title} ~ Yaşar İçli</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>

        <header className="page-header">
          <Image src="/images/avatar.jpeg" width="150" height="150" />

          <ul>
            <li>
              <Link activeClassName="active" href="/">
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.github.com/yasaricli">
                <a target="_blank">github</a>
              </Link>
            </li>
            <li>
              <Link activeClassName="active" href="/contact">
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
