export const fillObjectWith = (data, value, exclude) => {
    const clone = Object.assign({}, data)
    Object.keys(clone).map(
        key => clone[key] = value
    );
    if (!exclude) return clone;
    exclude.forEach(value => clone[value] = data[value])
    return clone;
};

export const deleteAttributesWithValue = (data, valueList, deleteBlankNested) => {
    Object
        .entries(data)
        .forEach(
            ([k, v],) => {
                //check if value is object
                if (v && typeof v === 'object') deleteAttributesWithValue(v, valueList, deleteBlankNested)
                // if @param deleteBlankNested is true delete empty nested attributes
                if (deleteBlankNested && v && typeof v === 'object' && !Object.keys(v).length) {
                    Array.isArray(data)?
                           data.splice(k, 1)
                           :
                           delete data[k]
                    
                }
                //delete key in @param valueList
                if (valueList.includes(v)) {
                    Array.isArray(data)?
                           data.splice(k, 1)
                           :
                           delete data[k]
                    
                }

            }
        )
    return data;
};

