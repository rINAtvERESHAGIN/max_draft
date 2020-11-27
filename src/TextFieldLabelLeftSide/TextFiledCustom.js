import React from "react";
import {FormControl, Input, InputLabel, FormHelperText, FormLabel, makeStyles, withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';

const styles = theme => ({
  formControl: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
    flexDirection: "column",
    // width:'200px'
  },
  formLabel: {
    marginRight: theme.spacing(1),
  },
  containerLabelInput: {
    display: "flex",
  },
  formLabelLayout: {
    alignSelf: "flex-start",
    marginTop: theme.spacing(2),
    flexGrow: 1
  }
});

const fields = [
  {label: 'Street'},
  {label: 'PO Box'},
  {label: 'City'},
  {label: 'Country'},
  {label: 'Email'},
];
const stylesFormGroup = theme => ({});
const FormGroup = withStyles(stylesFormGroup())((props => {
  const {children, classes} = props;
  return (
    <table>
      <tbody>
      {children}
      </tbody>
    </table>
  )
}))

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

const stylesFormContent = theme => ({});
const FormContent = withStyles(stylesFormGroup())((props => {
  const {children, classes} = props;
  return (
    <tr>
      {children}
    </tr>
  )
}))


const TextFieldCustom = props => {
  const {classes} = props;

  return (
    <table>
      <tbody>
      <tr>
        <FormControl>
          <td>
            <FormLabel className={`${classes.formLabel} ${classes.formLabelLayout}`}
            >{fields[0].label}
            </FormLabel>
          </td>


          <td>
            <Input id={`my-input$`}
                   aria-describedby={`my-helper-text`}
            />
          </td>
        </FormControl>
      </tr>
      </tbody>
    </table>

  // <div>
  //   <FormControl>
  //     <FormGroup>
  //       {fields.map((field, index) => (
  //         // <FormControl>
  //         //   <FormGroup>
  //         <FormContent>
  //           <td>
  //             <FormLabel className={`${classes.formLabel} ${classes.formLabelLayout}`}
  //             >{field.label}
  //             </FormLabel>
  //           </td>
  //
  //           <td>
  //             <Input id={`my-input${index}`}
  //                    aria-describedby={`my-helper-text${index}`}
  //             />
  //           </td>
  //         </FormContent>
  //         //   </FormGroup>
  //         // </FormControl>
  //
  //
  //         // <FormControl key={index} className={classes.formControl}>
  //         // {/*<InputLabel htmlFor="my-input">Адрес электронной почты</InputLabel>*/}
  //         // <div className={`${classes.containerLabelInput}`}>
  //         // <FormLabel className={`${classes.formLabel} ${classes.formLabelLayout}`}
  //         // >{field.label}
  //         // </FormLabel>
  //         // <Input id={`my-input${index}`} aria-describedby={`my-helper-text${index}`}/>
  //         // </div>
  //         // {/*<FormHelperText id="my-helper-text">Введите ваш email</FormHelperText>*/}
  //         // </FormControl>
  //       ))}
  //     </FormGroup>
  //   </FormControl>
  // </div>
)
}

export default withStyles(styles)(TextFieldCustom);
