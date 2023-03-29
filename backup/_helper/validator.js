const Joi = require("joi")

const validatorData = (schema) => (payload) => schema.validate(payload, { abortEarly: false });

const createRazorpayContactValidation = Joi.object({
    raz_contact_id: Joi.string().required(),
    user_id: Joi.string().required(),
})

const razorpayFundAccount = Joi.object({
    raz_contact_id: Joi.string().required(),
    user_id: Joi.string().required(),
    fund_id: Joi.string().required(),
})


const payoutValidator = Joi.object({
    raz_contact_id: Joi.string().required(),
    user_id: Joi.string().required(),
})


const addAmountToSellerWalletValidator = Joi.object({
    user_id: Joi.string().required(),
    inactive: Joi.required(),
    limit: Joi.required(),
    page: Joi.required(),
    searchText: Joi.required(),
    sortBy: Joi.required(),


})


const paymentRequestValidator = Joi.object({
    amount: Joi.number().required(),
    user_id: Joi.string().required(),
})

exports.createRazorpayValidator = validatorData(createRazorpayContactValidation);
exports.razorpayFundAccountValidator = validatorData(razorpayFundAccount);
exports.payoutValidator = validatorData(payoutValidator);
exports.addAmountToSellerWalletValidator = validatorData(addAmountToSellerWalletValidator);
exports.paymentRequestValidator = validatorData(paymentRequestValidator);