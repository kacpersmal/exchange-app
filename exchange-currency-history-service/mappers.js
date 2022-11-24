const NormalizeSocketResponse = (data) => {
  return data.Items.map((e) => ({
    ...e,
    PublicationDate: data.PublicationDate,
  }));
};

module.exports = { NormalizeSocketResponse };
