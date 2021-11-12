import React, { ReactElement } from 'react';
import {
  Link,
} from 'react-router-dom';
import PageMenu from './PageMenu';
import logo from '../../resources/wcosr_logo.jpg';

export default function PageHeader(): ReactElement {
  return (
    <div className="flex flex-row justify-center bg-wcosr_yellow text-black">
      <div className="w-full md:w-9/12">
        <div className="flex flex-row p-4">
          <img src={logo} alt="wcosr logo" className="h-14" />
          <PageMenu>
            <Link to="/">Home</Link>
            <Link to="/kryptcon">KryptCon</Link>
            <Link to="/about">About</Link>
          </PageMenu>
        </div>
      </div>
    </div>
  );
}
