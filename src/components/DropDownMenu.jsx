import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: 'fit-content',
    height: 'fit-content',
    marginTop: '1rem',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    fontFamily: "'Raleway', serif",
    fontSize: "1.5rem",
    '&:active': {
      opacity: '0.6',
      fontWeight: 'bold',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
export default function DropDownMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className="action-li"
        aria-owns={anchorEl ? "customized-menu" : undefined}
        aria-haspopup="true"
        style={{fontSize:"1.5rem", letterSpacing: "0.2rem"}}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {props.title}<KeyboardArrowDownIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
            <StyledMenuItem>
              <Link to={props.firstLink} onClick={props.onClick}><li className="action-subli" >{props.first}</li></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link to={props.secondLink} onClick={props.onClick}><li className="action-subli" >{props.second}</li></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link to={props.thirdLink} onClick={props.onClick}><li className="action-subli" >{props.third}</li></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link to={props.fourthLink} onClick={props.onClick}><li className="action-subli" >{props.fourth}</li></Link>
            </StyledMenuItem>
          </StyledMenu>
    </div>
  );
}