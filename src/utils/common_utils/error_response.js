function errorResponse(message, explanation){
    return {
        'success': false,
        'message': message,
        'data': {},
        'error': {
            'explanation': explanation
        }
    }
}

module.exports = errorResponse;