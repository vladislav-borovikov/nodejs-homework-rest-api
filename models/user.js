const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiRegistrationShema = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(8).required(),
    email: Joi.string().required(),
    subscription: Joi.string(),
  });
  const validationResult = schema.validate(data);
  return validationResult;
};

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = { User, joiRegistrationShema };
