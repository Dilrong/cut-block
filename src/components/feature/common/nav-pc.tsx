"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  toggle: boolean;
  handleToggle: () => void;
}

function NavPc({ toggle, handleToggle }: Props) {
  return (
    <div
      className={`${
        !toggle && "hidden"
      } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
      id="mobile-menu"
    >
      <ul className="mt-4 gap-2 flex flex-col items-center lg:mt-0 lg:flex-row">
        <li>
          <Link href="/portfolio" className="block" onClick={handleToggle}>
            <Button variant="ghost">포트폴리오</Button>
          </Link>
        </li>
        {/*<li>*/}
        {/*  <Link href="/column" className="block" onClick={handleToggle}>*/}
        {/*    <Button variant="ghost">칼럼</Button>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <li>
          <Link href="/contact" className="block" onClick={handleToggle}>
            <Button variant="ghost">
              <b>문의하기</b>
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavPc;
