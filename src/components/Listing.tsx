import { TItem, TListingProps } from '../models';
import { ItemCard } from './ItemCard';

export function Listing({recievedData}:TListingProps) {
    
    return (
        <div className="item-list">
            { recievedData.map((dataItem:TItem) => {
                return <ItemCard key={dataItem.listing_id} item={dataItem}/>
            })}
        </div>
    )
}