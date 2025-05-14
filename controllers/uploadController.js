exports.uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(200).json({ filename: req.file.filename, path: `/uploads/${req.file.filename}` });
};
