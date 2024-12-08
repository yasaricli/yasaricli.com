import { withRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ className, title, children, router }) => {
  const fullTitle = `Yaşar İçli ~ ${title}`;

  const isActiveClassName = (route) => {
    if (router.route == route) {
      return {
        className: "active",
      };
    }

    return {};
  };

  return (
    <div id="Surface" className={className}>
      <Head>
        <title>{fullTitle}</title>
      </Head>

      <header className="page-header">
        <Image src="/images/avatar.png" width={150} height={150} alt="Avatar"/>

        <ul>
          <li>
            <Link href="/" {...isActiveClassName("/")} title="About">
              Hakkımda
            </Link>
          </li>
          <li>
            <Link href="https://www.github.com/yasaricli" target="_blank" title="Github">
              Github
            </Link>
          </li>
          <li>
            <Link href="/contact" {...isActiveClassName("/contact")} title="Contact">
              İletişim
            </Link>
          </li>
        </ul>
      </header>
      <section>{children}</section>
    </div>
  );
};

export default withRouter(Layout);
