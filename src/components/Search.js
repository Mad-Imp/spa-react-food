//Hooks
import {useState} from "react";
//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '70vw',
        },
    },
    btn: {
        paddingLeft: 15,
        paddingRight: 15,
    },
}));

export default function Search({callback = Function.prototype}) {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleKey = e => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        callback(value);
    }

    return (
        <div className='search'>
                <TextField className={classes.root}
                           id="search-field"
                           type='search'
                           label="Enter category"
                           onKeyDown={handleKey}
                           onChange={e => setValue(e.target.value)}
                           value={value}/>
            <Button className={classes.btn} size="small" color="primary" onClick={handleSubmit}>Search</Button>
        </div>
    )
}