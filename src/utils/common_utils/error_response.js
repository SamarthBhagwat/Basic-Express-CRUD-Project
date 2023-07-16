function errorResponse(error){
    return {
        'success': false,
        'message': 'Something went wrong while creating airplane',
        'data': {},
        'error': error
    }
}

module.exports = errorResponse;