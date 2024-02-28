import React from "react";

export default function Error(props) {
  function renderError() {
    let { errs } = props;
    if (Object.keys(errs).length > 0) {
      return Object.keys(errs).map((key, index) => {
        return (
          <i style={{ color: "red", fontWeight: 400 }} key={index}>
            {errs[key]}
          </i>
        );
      });
    }
  }
  return <div>{renderError()}</div>;
}
