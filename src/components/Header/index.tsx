import React from 'react';
import { Link } from 'react-router-dom';


export const  Header:React.FC = () => {
  return (
    <ul className="header">
      <li>
        <Link to="/company">关于公司</Link>
      </li>
      <li>
        <Link to="/company">工作</Link>
      </li>
    </ul>
  );
};