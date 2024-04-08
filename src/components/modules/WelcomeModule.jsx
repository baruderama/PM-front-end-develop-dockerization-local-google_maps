import React from "react";

const WelcomeModule = () => {
  const msg = "Bienvenido a BI Más Metros";
  const descMsg = "Si tienes alguna inquitud contacta a el equipo de ITM";
  return (
    <div className="ht-100v d-flex align-items-center justify-content-center">
      <div className="wd-lg-70p wd-xl-50p tx-center pd-x-40">
        <h5 className="tx-normal tx-gray-800 mg-b-0">{msg}</h5>
        <p className="tx-16 mg-b-30">{descMsg}</p>
      </div>
    </div>
  );
};

export { WelcomeModule };
