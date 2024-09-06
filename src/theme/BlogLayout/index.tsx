import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import BlogRecentPosts from "../BlogRecentPosts"
import type {Props} from "@theme/BlogLayout"

export default function BlogLayout(props: Props): JSX.Element {
  const {sidebar, toc, children, ...layoutProps} = props
  const hasSidebar = sidebar && sidebar.items.length > 0

  return (
    <Layout {...layoutProps}>
      <div className="container my-8">
        <div className="row justify-center">
          <main
            className={clsx("col", {
              "col--7": hasSidebar,
              "col--9 col--offset-1": !hasSidebar,
            })}
          >
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
      <BlogRecentPosts sidebar={sidebar} />
    </Layout>
  )
}