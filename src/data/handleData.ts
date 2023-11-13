import etsy from './etsy.json'

export const recievedData = etsy.map(item => ({
        listing_id: item.listing_id || 0,
        url: item.url || "#",
        mainImage: item.MainImage ? item.MainImage?.url_570xN : "https://placehold.co/600x400?text=No+Image+here",
        title: item.title || "No title",
        currency_code: item.currency_code || "",
        price: item.price || "",
        quantity: item.quantity || 0,
    })
);