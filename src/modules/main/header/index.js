import React, { Fragment } from 'react';
function AppHeader() {
  return (
    <Fragment>
      <ul>
        <li>
          <a href="/speech/add">Add speeches</a>
        </li>
        <li>
          <a href="/speech/list">List speeches</a>
        </li>
        <li>
          <a href="/user/add">Sign Up</a>
        </li>
      </ul>
    </Fragment>
  );
}

export default AppHeader;
