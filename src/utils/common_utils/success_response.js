function successResponse(data){
    return {
        'success': true,
        'message': 'Successfully completed the request',
        'data': data,
        'error': {} 
    }
}

module.exports = successResponse;