class AppError extends Error{
    constructor(message){
        super(message);
        this.explanation = [];
    }
}

module.exports = {
    AppError
}