export class FormManager {
  constructor() {
    this.ref = null;
    this.scheme = null;
    this.error = {};
  }

  handleSubmit = (callback) => {
    return (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.target);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      callback(data);
    };
  };

  dispatch(target, data) {
    target.dispatchEvent(
      new CustomEvent('validate-controls', { bubbles: true, detail: data })
    );
  }

  validate = (key) => {
    return (evt) => {
      const value = evt.target.value;
      const results = this.scheme[key]
        .map((callback) => callback(value))
        .filter((item) => Object.values(item).length !== 0)
        .reduce((acc, curr) => {
          const [key, value] = Object.entries(curr)[0];
          acc[key] = value;
          return acc;
        }, {});

      this.dispatch(evt.target, {
        [key]: {
          value,
          errors: results,
          isTouched: true,
          isValid: Object.values(results).length === 0,
        },
      });
    };
  };

  init(ref, scheme) {
    this.ref = ref;
    this.scheme = scheme;
    const validationFields = Object.keys(scheme);

    validationFields.forEach((key) => {
      ref.querySelector(`input[name="${key}"]`).addEventListener('blur', this.validate(key));
    });
  }
}
