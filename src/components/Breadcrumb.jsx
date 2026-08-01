// src/components/Breadcrumb.jsx
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // If on home page, don't show breadcrumbs
  if (pathnames.length === 0) return null;

  let currentLink = '';

  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          currentLink += `/${value}`;
          const isLast = index === pathnames.length - 1;
          const formattedName = decodeURIComponent(value.replace(/-/g, ' '));

          return (
            <li key={currentLink}>
              {isLast ? (
                <span>{formattedName}</span>
              ) : (
                <Link to={currentLink}>{formattedName}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;