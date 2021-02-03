import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addPost } from '../../actions'
import { useState } from 'react';

import nextId from "react-id-generator";

import PostsList from './posts-list';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F5F5F5',
        marginTop: '20px',
        padding: '3ch',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    formStyle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    field:{
        width: '60ch',
        minHeight: '55px',
        maxHeight: '200px',
        fontFamily: 'Roboto',
        padding: '10px',
        marginRight: '20px',
        border: '1px solid #cccccc',
        borderRadius: '5px',
        fontSize: '1rem'
    },
    btn:{
        width: '20ch',
        height: '55px'
    },
    listItem: 
    {
        marginTop: '20px'
    }
}));

function TodoList({ add }) {
    const classes = useStyles();

    const [text, settext] = useState('')

    function onAddPost(e)
    {
        e.preventDefault();
        
        settext(text.trim());
        if (!text) return;

        const id = nextId();
        const date = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
        add(text, id, date);
        settext('');
    }
    
    return (
        <Box className={classes.root}>
            <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={onAddPost}>
                <TextareaAutosize  className={classes.field} label="the note" variant="outlined" 
                    value={text}
                    onChange={({target}) => settext(target.value)}
                />
                <Button className={classes.btn} variant="outlined" color="primary"
                    type="submit"
                >
                    add
                </Button>
            </form>

            <div className={classes.listItem}>
                <PostsList/>
            </div>
        </Box>
  );
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, { add: addPost })(TodoList);
