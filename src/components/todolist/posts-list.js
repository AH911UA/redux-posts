import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { connect } from 'react-redux'
import PostListItem from './post-list-item';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { delPost } from '../../actions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    backgroundColor: theme.palette.background.paper,
  },
  advertising:
  {
    padding: '20px',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
}));

function PostsList({ state, del }) {
  const classes = useStyles();

  console.log("state syed : ", state);

  return (
    <List className={classes.root}>
      {
        state.counter ?
          state.posts.map(p => <PostListItem key={p.id} id={p.id} text={p.text} date={p.date} del={ del }/>)
          :
          <div className={classes.advertising}> your future post</div>
      }
      
    </List>
  );
}

const mapStateToProps = (state) => {

  return {
    state: state
  }
}

export default connect(mapStateToProps, {del: delPost})(PostsList)