export const fillObjectWith = (data, value, exclude) => {
    const clone = Object.assign({}, data)
    Object.keys(clone).map(
        key => clone[key] = value
    );
    if (!exclude) return clone;
    exclude.forEach(value => clone[value]=data[value])
    return clone;
};

