import React from "react";

interface Props {
  route: string;
}
const Routing = ({ route }: Props) => {
  switch (route) {
    case "/":
      return (
        <div>
          根っこ <a href="#/new">new</a>
        </div>
      );
    case "/new":
      return (
        <div>
          あたらしい <a href="#/">root</a>
        </div>
      );
    default:
      return <div>偽 404 not found</div>;
  }
};
export default Routing;
