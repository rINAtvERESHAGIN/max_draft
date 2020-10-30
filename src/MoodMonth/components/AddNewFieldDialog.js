import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function AddNewField(props) {
  const {handleClose, open} = props;
//todo need understand
  const {name, handleSetName} = props;
  //todo need understand
  const {tech, handleSetTech} = props;
//todo need understand
  const {handleAddField} = props;
  // const {handleOnclickNewTextField,setHandleOnclickNewTextField} = props;
  //
  // const handleOnclickNewTextField = () => {
  //     setHandleOnclickNewTextField(
  //
  //     )
  // };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new field</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This needed for enter value for yours new field!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name of field"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => handleSetName(e)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Technical name"
            type="text"
            fullWidth
            value={tech}
            onChange={(e) => handleSetTech(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Button onClick={handleAddField}
                  color="primary"
                  disabled={name === '' || tech === ''}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddNewField;
