import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-top-loading-bar'


function LoadingComponent(props) {
    const { loading } = props
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (loading) {
            const timer = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress === 100) {
                        return 0;
                    }
                    const diff = Math.random() * 10;
                    return Math.min(oldProgress + diff, 100);
                });
            }, 800);

            return () => {
                clearInterval(timer);
            };
        }else{
            setProgress(0)
        }
    }, []);

    return (
        <><LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} /><br /></>
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
