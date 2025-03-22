// components/ErrorBoundary.js
import {Component} from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false, error: null}
  }

  static getDerivedStateFromError(error) {
    return {hasError: true, error}
  }

  componentDidCatch(error, info) {
    console.error('Component failed to render:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='error-container'>
            <h3>Component Error</h3>
            <p>Something went wrong loading this content.</p>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
