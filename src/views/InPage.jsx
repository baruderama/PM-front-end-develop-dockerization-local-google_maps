import { Head, Footer, LeftSection } from "../components/ComponentsExport";
import React from "react";

/**
 *
 * @param {*} param0
 * @returns
 */

function InPage({ component: Component }) {
  const title = "Dashboard";

  return (
    <>
      <Head />
      <LeftSection />
      <div className="am-mainpanel">
        <div className="am-pagetitle">
          <h5 className="am-title">{title}</h5>
        </div>
        <div className="am-pagebody">
          <Component />
        </div>
        <Footer />
      </div>
    </>
  );
}
export { InPage };
