import React from 'react'
import { BaseLayout, BaseLayoutHeader } from '@/components/BaseLayout'
import Head from '@/components/Head'

let Layout: React.FC = ({ children }) => {
  return (
    <BaseLayout>
      <BaseLayoutHeader />
      {children}
    </BaseLayout>
  )
}

export default Layout
