export const testFunction = (functionInUseCase, expected, typeExpected) => {   
    return (functionInUseCase == expected) && (typeof functionInUseCase == typeExpected)? true : false;
};