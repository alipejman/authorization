function NotFoundErr(req, res, next) {
    res.send({
        statusCode: 404,
        message: "Not Found Page"
    })
};

function ErrHandler(err, req, res, next) {
    const status = err?.status ?? err?.statusCode ?? 500;
    res.send({
        statusCode: status,
        message: err?.message ?? "internall server error"
    })
}



module.exports = {
    ErrHandler,
    NotFoundErr
} 