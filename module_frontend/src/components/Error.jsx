import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state sehingga berikutnya render akan menunjukkan fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Anda bisa juga mengupload error ke layanan pelaporan kesalahan
        console.error("Error caught in Error Boundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Anda bisa merender fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;