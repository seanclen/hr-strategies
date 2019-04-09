import React from "react"
import { Link } from "gatsby"
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const MyCustomBreadcrumb = ({ location }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: 'Home',
  });

  return (
    <div>
      {crumbs.map(crumb => {
        return (
          <div style={{ display: "inline" }}>
            {JSON.stringify(crumb)}
            Link
            <br />
            <Link
              to={crumb.pathname}
              style={{ ...crumb.crumbStyle }}
              activeStyle={{ ...crumb.crumbActiveStyle }}
            >
              {crumb.crumbLabel}
            </Link>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default MyCustomBreadcrumb
