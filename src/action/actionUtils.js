export function circlePushList (start, len, oriData) {
    const temp = []
    for(let i = start; i < start + len; i ++){
        const entry = oriData[i];
        if(entry) {
            temp.push(entry);
        }
    }
    return temp;
}