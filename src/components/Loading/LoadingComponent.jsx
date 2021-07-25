import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import ReactLoading from 'react-loading'

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
}));

function LoadingComponent(props) {
    const { loading } = props
    const classes = useStyles();

    useEffect(() => {
    }, []);

    return (
        <>
            {loading && <div className={classes.paper} style={{ backgroundColor: '#f2844e', height: '100vh' }} >
                <ReactLoading type={"bars"} color={"#ffffff"} height={'5%'} width={'5%'} />
            </div>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.authentication.loading
    };
}

export default connect(
    mapStateToProps
)(LoadingComponent);
