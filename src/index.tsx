/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="../typings/react/react-dom.d.ts"/>

import * as React from "react";
import * as ReactDom from "react-dom";

class Main extends React.Component<{}, {}> {
  public render(): any {
    return (
      <div>
        The SIMPLEST app ever.
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById("app"));
