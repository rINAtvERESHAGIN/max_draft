import React from "react";


class Item extends React.Component {
    render() {
        const {item} = this.props;
        const {children} = this.props;

        return (
            <div>
                {children}
            </div>
        )
    }
}

export default Item;
