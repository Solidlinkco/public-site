const ERROR = { error: true };

export const getBase64 = (file, ...rest) => {
    if (!file) return ERROR;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve, reject) => {
        reader.onload = () => resolve({ base64: reader.result, rest, file });
        reader.onerror = () => resolve(ERROR);
    });
};
