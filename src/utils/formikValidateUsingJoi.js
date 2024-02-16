import joi from "joi";

const formikValidateUsingJoi = (schema) => {
  const formSchema = joi.object(schema);

  return (values) => {
    const { error } = formSchema.validate(values, { abortEarly: false });

    if (!error) {
      return null;
    }

    const errors = {};
    for (const detail of error.details) {
      const errorKey = detail.path[0];
      errors[errorKey] = detail.message;
    }

    return errors;
  };
};

export default formikValidateUsingJoi;
