import React from "react";
import ProductLine from "../components/ProductLine/ProductLine";
import { checkAuthState } from "../store/actions/actionAuth";

class Index extends React.Component {
  state = {
    productLines: [
      {
        id: 1,
        name: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        linkUrl: "shop/hats",
      },
      {
        id: 2,
        name: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        linkUrl: "shop/jackets",
      },
      {
        id: 3,
        name: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        linkUrl: "shop/sneakers",
      },
      {
        id: 4,
        name: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        linkUrl: "shop/mens",
        size: "large",
      },
      {
        id: 5,
        name: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        linkUrl: "shop/womens",
        size: "large",
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="homepage">
          {this.state.productLines.map((prdLine) => (
            <ProductLine
              size={prdLine.size}
              key={prdLine.id}
              link={prdLine.linkUrl}
              productLine={prdLine}
            />
          ))}
        </div>
        <style jsx>{`
          @media screen and (min-width: 768px) {
            .homepage {
              display: flex;
              flex-wrap: wrap;
            }
          }
          @media screen and (max-width: 767px) {
            .homepage {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          }
        `}</style>
      </div>
    );
  }
}
//const mapDispatchToProps = (dispatch) => {
//  return {
//    checkAuthState: () => dispatch(checkAuthState()),
//  };
//};
export default Index;
