import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardFooter, CardHeader, CardBody } from 'reactstrap';


const CardBox = ({
  icon, title, children, footer
}) => (
  <Card className="mb-5">
    <CardHeader>
      <i className={icon} />
      {` ${title}`}
    </CardHeader>
    <CardBody>{children}</CardBody>
    <CardFooter>{footer}</CardFooter>
  </Card>
);

CardBox.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired
};

export default CardBox;
