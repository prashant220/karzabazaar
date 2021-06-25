import React from 'react'
import './Reviews.css'
import Avatar from '@material-ui/core/Avatar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import group from '../images/Group.png'

import { makeStyles } from '@material-ui/core/styles';


function Reviewbox() {
    const useStyles = makeStyles((theme) => ({
       
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
          marginLeft:'5px'
        },
      }));
      const classes = useStyles();
    return (
       
            
                <div className="customer2">
                    <div>
                    <Avatar src={group} className={classes.large}/>
                    </div>
                    <div style={{marginLeft:'42px'}}>
                    <StarBorderIcon/><StarBorderIcon/>  <StarBorderIcon/>  <StarBorderIcon/>  <StarBorderIcon/>
                    </div>
                </div>
              

         
    )
}

export default Reviewbox
