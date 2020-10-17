import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';


const useStyles = makeStyles((theme) => ({
    root: {
        height: 100,
    },
}));

export default function PhotoGrow() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    useEffect(() => {
        setTimeout(()=>
        setChecked(true), 1000)
    } )

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Grow
                    in={checked}
                    style={{ transformOrigin: '-1 -1 0' }}
                    {...(checked ? { timeout: 5000 } : {})}
                >
                    <p className="about-me-text">Tutaj wjedzie fotunia</p>
                </Grow>
            </div>
        </div>
    );
}