import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-top-loading-bar'


function LoadingComponent(props) {
    const { loading } = props
    const ref = useRef(null)

    useEffect(() => {
        if (loading) {
            ref.current.continuousStart()
        }
    }, [])

    return (
        <><LoadingBar color='#f11946' ref={ref} /><br /></>
    )
}

const mapStateToProps = (state) => {
    const { authentication } = state;
    const { loading } = authentication;
    return { loading };
}

export default connect(
    mapStateToProps
)(LoadingComponent);
