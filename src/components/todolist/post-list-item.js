import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
 

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    },
    postInfo: {
        maxWidth: '100px',
        minWidth: '100px'
    }
}));

export default function PostListItem({id, text, date, del})
{
    const classes = useStyles();

    return (
        <>
            <ListItem>
                <ListItemText className={classes.postInfo} primary="Post" secondary={date} />

                <p className={classes.root}>{text}</p>

                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete"
                        onClick={() => del(id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}

 