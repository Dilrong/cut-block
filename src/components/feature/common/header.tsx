"use client";

import { Suspense, useState } from "react";
import Logo from "@/components/feature/common/logo";
import NavPc from "@/components/feature/common/nav-pc";
import { GoogleAnalytics } from "nextjs-google-analytics";
import NavContainer from "@/components/feature/common/nav";
import NavMobile from "@/components/feature/common/nav-mobile";
import MetaInfo from "@/components/feature/common/meta-info";

function Headers() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Suspense>
        <GoogleAnalytics />
        <MetaInfo />
      </Suspense>
      <NavContainer>
        <Logo />
        <NavMobile handleToggle={handleToggle} />
        <NavPc toggle={toggle} handleToggle={handleToggle} />
      </NavContainer>
    </>
  );
}

export default Headers;
