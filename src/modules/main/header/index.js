import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
function AppHeader() {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to='/speech/add'>
          Add speeches
          </Link>
        </li>
        <li>
          <Link to='/speech/list'>
          List speeches
          </Link>
        </li>
        <li>
          <Link to='/user/add'>
          Add User
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default AppHeader;
