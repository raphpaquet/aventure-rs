import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    height: '90%',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let content = {
    english: {
      title: "SEE RIVER CARD",
    },
    french: {
      title: "VOIR LA CARTE DE LA RIVIERE",
    }
  }

  props.language === "french" ? (content = content.french) : (content = content.english);

  const body = (
    <div className={classes.paper}>
      <object data={props.data} type="application/pdf" width="100%" height="100%">
          This browser does not support PDFs. Please Download the PDF to view it: Download PDF
        </object>
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div>
      <button type="button" className="button" onClick={handleOpen}>
        {content.title}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{display:"flex", justifyContent:"center", alignItems:"center"}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
