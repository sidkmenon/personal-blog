import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactIcons: React.FC = () => {
  return (
    <div className="justify-end">
      <Link href="https://github.com/sidkmenon/">
        <a className="pr-6 py-4">
          <Image
            alt="Sid Menon's Github"
            src="/icons/github.svg"
            width={25}
            height={25}
          />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/sidkmenon">
        <a className="px-6 py-4">
          <Image
            alt="Sid Menon's LinkedIn"
            src="/icons/linkedin.svg"
            width={25}
            height={25}
          />
        </a>
      </Link>
      <Link href="mailto:menon.sid.k@gmail.com">
        <a className="px-6 py-4">
          <Image
            alt="Sid Menon's Email"
            src="/icons/email.svg"
            width={25}
            height={25}
          />
        </a>
      </Link>
    </div>
  );
};

export default ContactIcons;
