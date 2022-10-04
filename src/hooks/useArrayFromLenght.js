const useArrayFromLenght = (lenght) => {
    return Array.apply(null, { length: lenght }).map(Number.call, Number);
};

export default useArrayFromLenght;