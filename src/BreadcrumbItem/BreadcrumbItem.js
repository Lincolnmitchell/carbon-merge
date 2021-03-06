import React from "react";
import PropTypes from "prop-types";
import { BreadcrumbItem as BreadcrumbItemM } from "carbon-components-react";

function BreadcrumbItem(props) {
  return (
    <BreadcrumbItemM {...props}>
      {props.children}
    </BreadcrumbItemM>
  );
}

BreadcrumbItem.propTypes = {
  /**
   * Pass in content that will be inside of the BreadcrumbItem
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Optional string representing the link location for the BreadcrumbItem
   */
  href: PropTypes.string, 
};

export { BreadcrumbItem as default };
