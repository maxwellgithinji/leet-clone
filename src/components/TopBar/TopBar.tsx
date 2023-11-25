import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '../Button/Button';

type TopBarProps = {};

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center bg-dark-layer-1 px-5 text-dark-gray-7">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <Link href="/" className="h-[22px] flex-1">
          <Image
            src="/assets/images/logo-full.png"
            alt="Default"
            width={28}
            height={28}
          />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer rounded bg-dark-fill-3 px-3 py-1.5 text-brand-orange hover:bg-dark-fill-2"
            >
              Premium
            </a>
          </div>
          <Link href="/auth">
            <Button buttonClass="topbar" buttonType="button" text="Login" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
