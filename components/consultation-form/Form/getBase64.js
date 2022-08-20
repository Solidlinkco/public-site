const ERROR = { error: true };

export const getBase64 = (file) => {
    if (!file) return ERROR;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve, reject) => {
        reader.onload = () => resolve({ base64: reader.result });
        reader.onerror = () => resolve(ERROR);
    });
};
