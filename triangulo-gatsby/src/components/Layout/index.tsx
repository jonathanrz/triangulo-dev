import React from "react"
import { BaseLayout, BaseLayoutHeader } from "../BaseLayout"

let Layout: React.FC = ({ children }) => {
  return (
    <BaseLayout>
      <BaseLayoutHeader />
      {children}
    </BaseLayout>
  )
}

export default Layout
