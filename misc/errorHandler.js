// function to ensure error messages have consistent format
function errorMessageReturn(errorValue, errorCode, res) {
    // express validatior returns a error array and this handles that
    if (errorValue.isArray) {
        return res.status(errorCode).json({
            errors: errorValue,
        })
    // and this handles plain errors and puts them in the same array format
    } else {
        return res.status(errorCode).json({
            error: [{ msg: errorValue }],
        })
    }
}

class errorHandler {
    // Generic server error to be used in a try catch
    static serverError(res, err) {
        console.error(err.message)
        return errorMessageReturn("a error has occurred with the server", "500" , res)
    }
}

module.exports = errorHandler