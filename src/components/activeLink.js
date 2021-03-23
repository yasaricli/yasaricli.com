import React, { Children } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import classnames from 'classnames';

export default withRouter(({ router, children, as, href, ...rest }) => {
  const className = classnames({
    active: router.asPath == href || router.asPath == as
  });

  return (
    <Link {...rest} href={href} as={as}>
      {React.cloneElement(Children.only(children), {
        className })}
    </Link>
  );
});
