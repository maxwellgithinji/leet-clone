import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type NavbarProps = {
  button?: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ button }) => {
  return (
    <div className="flex items-center justify-between px-2 sm:px-12 md:px-24 ">
      <Link href="/" className="flex h-20 items-center justify-center">
        <Image
          src="/assets/images/logo.png"
          alt="leetclone"
          width={100}
          height={100}
          loading="eager"
        />
      </Link>
      <div className="flex items-center">{button}</div>
    </div>
  );
};

export default Navbar;
