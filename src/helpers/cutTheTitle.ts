export function cutTheTitle(title: string) {
    return title.length >= 50 ? `${title.slice(0, 50)}...` : title;
}