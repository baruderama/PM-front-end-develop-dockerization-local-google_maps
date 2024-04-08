import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

/**
 *
 * @param {*} param0
 * @returns
 */
function Head() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const namePlatform = "Más Metros";

  const { logout, user } = useAuth();

  const handleNaviconClick = (event) => {
    event.preventDefault();
    document.body.classList.toggle("collapse-menu");
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  const handleProfileClick = (event) => {
    event.preventDefault();
    document.getElementById("seeOption").classList.toggle("show");
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    // Muestra un indicador de carga o un mensaje de "Cargando"
    return <div>Cargando...</div>;
  }

  return (
    <div className="am-header">
      <div className="am-header-left">
        <a
          id="naviconLeft"
          href=""
          className="am-navicon d-none d-lg-flex"
          onClick={handleNaviconClick}
        >
          <i className="icon ion-navicon-round"></i>
        </a>
        <a
          id="naviconLeftMobile"
          href=""
          className="am-navicon d-lg-none"
          onClick={handleNaviconClick}
        >
          <i className="icon ion-navicon-round"></i>
        </a>
        <a href="/in" className="am-logo">
          {namePlatform}
        </a>
      </div>
      <div className="am-header-right">
        <div className="dropdown dropdown-profile">
          <a
            href=""
            className="nav-link nav-link-profile"
            data-toggle="dropdown"
            aria-expanded="false"
            onClick={handleProfileClick}
          >
            <span className="logged-name">
              <span className="hidden-xs-down">{user.data.usr_name}</span>
              <span className="hidden-xs-down"></span>{" "}
              <i className="fa fa-angle-down mg-l-3"></i>
            </span>
          </a>
          <div
            className="dropdown-menu wd-200"
            id="seeOption"
            x-placement="bottom-start"
            style={{
              position: "absolute",
              transform: "translate3d(-51px, 48px, 0px)",
              top: "0px",
              left: "0px",
              willChange: "transform",
            }}
          >
            <ul className="list-unstyled user-profile-nav">
              <li>
                <a href="mi-perfil">
                  <i className="icon ion-ios-person-outline"></i> Administrar
                  perfil
                </a>
              </li>
              <li>
                <a onClick={handleLogout}>
                  <i className="icon ion-power"></i> Salir
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Head };
