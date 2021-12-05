const { NotFound } = require('http-errors');

const operations = require('../../model');

const deletById = async (req, res) => {
    const { id } = req.params;
    const contact = await operations.removeContact(id);
    if (!contact) {
      throw new NotFound(`Product with id=${id} is not found`);
    }
    res.json({
      status: 'succes',
      code: 200,
      message: 'contact deleted',
      data: {
        result: contact,
      },
    });
 
};
module.exports = deletById;
