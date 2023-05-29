const queryStringGenerator = (queries: Object) => {
    let queryCount = Object.keys(queries).length;

    let queryString = "?";
    for (const key in queries) {
        queryString += `${key}=${queries[key as keyof typeof queries]}${
            queryCount > 1 ? "&" : ""
        }`;
        queryCount--;
    }
    return queryString;
};

export default queryStringGenerator;
