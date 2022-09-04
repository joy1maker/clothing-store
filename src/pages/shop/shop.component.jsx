import React, { Component } from "react";
import SHOP_DATA from "../../shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colllections: SHOP_DATA
        }
    }

    render() {
        const { colllections } = this.state;
        return (
            <div className="shop-page">
                {colllections.map(({ id, ...otherProps }) => (
                    <PreviewCollection key={id} {...otherProps}></PreviewCollection>
                ))}
            </div>

        );
    }

}
export default ShopPage;