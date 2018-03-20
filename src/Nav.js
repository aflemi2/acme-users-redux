import React from 'react';
import { Link } from  'react-router-dom';

const Nav = ({ path }) => {
  return (
    <ul>
      <li>
       {
         path === '/products'? (
           <span>Products</span>
         ) : (
           <Link to='/products'>Products</Link>
         )
       }
      </li>
      <li>
       {
         path === '/'? (
           <span>Users</span>
         ) : (
           <Link to='/'>Users</Link>
         )

       }
      </li>
      <li>
       {
         path === '/users/create'? (
           <span>Create</span>
         ) : (
           <Link to='/users/create'>Create</Link>
         )
       }
      </li>
    </ul>
  )
}
export default Nav;
