import React, { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import CrossIcon from "../icons/CrossIcon";

const Actions = ({ setOpen }) => {
  return (
    <div className="actions-hder flex aic justify-end">
      <div className="items flex aic">
        <a href="#overview" className="item" onClick={(e) => setOpen(false)}>
          Overview
        </a>
        <a href="#about" className="item" onClick={(e) => setOpen(false)}>
          About
        </a>
        <a href="#roadmap" className="item" onClick={(e) => setOpen(false)}>
          Roadmap
        </a>
        <a href="#team" className="item" onClick={(e) => setOpen(false)}>
          Team
        </a>
      </div>
      <div className="btn cleanbtn button">Connect</div>
    </div>
  );
};

const Menu = ({ setOpen }) => {
  return (
    <div className="menu-c flex flex-col">
      <div className=" wrap flex aic">
        <div className="hdr flex">
          <div className="left flex">
            <img src="./images/logo.png" className="img" />
          </div>
          <div className="cross flex aic jc">
            <div
              className="cross-icon cursor-pointer"
              onClick={(e) => setOpen(false)}
            >
              <CrossIcon />
            </div>
          </div>
        </div>
        <div className="items-list flex flex-col aic">
          <Actions setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open ? (
        <div className="header-cmp flex aic jc">
          <div className="wrapWidth wrap flex aic">
            <div className="left flex">
              <img src="./images/logo.png" className="img" />
            </div>
            <div className="rigth flex">
              <Actions setOpen={setOpen} />
            </div>
            <div className="menu flex aic jc">
              <div className="menu-icon" onClick={(e) => setOpen(true)}>
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Menu setOpen={setOpen} />
      )}
    </>
  );
};

export default Header;
