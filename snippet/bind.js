
export const bind = (obj, method, ...args) => {
    return (...newArgs) => {
        // 判断 method 是否 function
        if (typeof method !== 'function') {
            return;
        }

        method.apply(obj, [...args, ...newArgs]);
    }; 
};