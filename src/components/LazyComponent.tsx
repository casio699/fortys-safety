import dynamic from 'next/dynamic'
import { ComponentType, ReactNode } from 'react'

interface LazyComponentProps {
  component: ComponentType<Record<string, unknown>>
  fallback?: ReactNode
  props?: Record<string, unknown>
}

const LazyComponent = ({ component: Component, fallback = <div>Loading...</div>, props = {} }: LazyComponentProps) => {
  const DynamicComponent = dynamic(() => Promise.resolve(Component), {
    loading: () => fallback,
    ssr: false
  })

  return <DynamicComponent {...props} />
}

export default LazyComponent
