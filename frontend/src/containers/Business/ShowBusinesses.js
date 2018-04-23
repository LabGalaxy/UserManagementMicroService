import React from 'react';
import BusinessGroup from "../../components/models/BusinessGroup";
import CreateBusinessGroup from "./CreateBusinessGroup";
import Aux from '../../hoc/AuxComponent';
import classes from './Business.css';


const showBusinesses = (props) => ({

  render() {
    var businessGroupDiv = <CreateBusinessGroup />;
    if (props.businessGroup.basicDetails) {
      businessGroupDiv = <BusinessGroup businessGroup={props.businessGroup} />;
    }
    return (
      <Aux className={classes.BusinessCards}>
        {businessGroupDiv}<div className={classes.PlusSign} />
      </Aux>
    );
  }
});

export default showBusinesses;