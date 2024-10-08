export const response404 = (res, message) => {
  try {
    return res.status(404).json({ status: false, message });
  } catch (error) {
    console.log(error);
  }
};

export const response401 = (res, message) => {
  try {
    return res.status(401).json({ status: false, message });
  } catch (error) {
    console.log(error);
  }
};

export const internalServerError = (res, message) => {
  try {
    return res.status(500).json({ status: false, message });
  } catch (error) {
    console.log(error);
  }
};
