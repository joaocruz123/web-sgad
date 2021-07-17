import React from 'react';
import ReactLoading from 'react-loading';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
}));


function LoadingComponent(props) {
    const classes = useStyles();
    const { type, color } = props

    return (
        <Container maxWidth="sm">
            <div className={classes.main}>
                <ReactLoading type={type} color={color} height={'4%'} width={'4%'} />
            </div>
        </Container>
    )
}

export default LoadingComponent;