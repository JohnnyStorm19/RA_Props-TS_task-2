import { currencies } from "../data/currencies";
import { cutTheTitle } from "../helpers/cutTheTitle";
import { checkQuantityClassName } from "../helpers/checkQuantityClassName";
import { TItemProps } from "../models";

export function ItemCard({item}: TItemProps) {
  return (
    <div className="item">
      <div className="item-image">
          <a href={item.url}>
              <img src={item.mainImage} />
          </a>
      </div>
      <div className="item-details">
          <p className="item-title">{cutTheTitle(item.title)}</p>
          { item.currency_code === 'USD' || item.currency_code === 'EUR' ? 
              <p className="item-price">{currencies[item.currency_code]}{item.price}</p> :
              <p className="item-price">{item.price} {currencies[item.currency_code]}</p>
          }
          <p className={`item-quantity ${checkQuantityClassName(item.quantity)}`}>{item.quantity} left</p>
      </div>
    </div>
  );
}
