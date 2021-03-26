import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    height: '90%',
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let content = {
    english: {
      title: "SEE RIVER CARDs *",
      problem: "Your browser does not support PDFs. Please consult the cards on: "
    },
    french: {
      title: "VOIR Les CARTEs DE LA RIVIERE *",
      problem: "Votre navigateur ne supporte pas les PDFs. Consultez les cartes sur: "
    }
  }

  props.language === "English" ? (content = content.english) : (content = content.french);

  const body = (
    <div className={classes.paper}>
      <object 
        data={props.data} 
        type="application/pdf" 
        width="100%" 
        height="100%">
          {/* <iframe 
            src="http://www.cartespleinair.org/Canot/04/NoireOutaouaisLeduc2018.pdf"
            width="100%"
            height="100%"
            style="border: none"> */}
            <p>{content.problem}
              <a href="http://www.cartespleinair.org/Canot/cartes.html" target="_blank" style={{color: "blue"}}>cartespleinair.org</a>.</p>
          {/* </iframe> */}
        </object>
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
