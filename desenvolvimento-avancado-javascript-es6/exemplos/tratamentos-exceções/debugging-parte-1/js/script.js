class CustomError extends Error {
    constructor({ message, data }) {
        super(message)
        this.data = data
    }
}

try {
    const name = 'Leonardo Klestadt Luz';
    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    })
    throw myError;
} catch (error) {
    if (error.data.type !== 'Server error') {
        console.log("Error: ", error);
    } else {
        console.log(error.data);
    }

} finally {
    console.log('Keep going...');
}
