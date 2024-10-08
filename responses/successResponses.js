export const response200 = (res, data, message) => {
  try {
    return res.status(200).json({ status: true, data, message });
  } catch (error) {
    console.log(error);
  }
};

export const createdResponse = (res, data, message) => {
  return res.status(201).json({ status: true, data, message });
};
