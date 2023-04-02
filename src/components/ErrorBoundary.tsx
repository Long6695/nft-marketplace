'use client'
import React, { Component, createElement, type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public static defaultProps: Props = {}

  constructor(props: Props) {
    super(props)

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error): Error {
    throw new Error(error?.message)
  }

  render(): React.ReactNode {
    const { hasError } = this.state
    const { children } = this.props
    // Check if the error is thrown
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => {
              this.setState({ hasError: false })
            }}
          >
            Try again?
          </button>
        </div>
      )
    }

    return children
  }
}
ErrorBoundary.defaultProps = {
  children: createElement('div'),
}
export default ErrorBoundary
