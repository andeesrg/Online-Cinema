export class Validator {
    static email(message) {
      return (value) => {
        const regExp = /^(.+)@(.+)$/g;
        if (!regExp.test(value)) {
          return {
            message,
          };
        }
  
        return {};
      };
    }
  
    static required(message) {
      return (value) => {
        if (value === '') {
          return {
            message,
          };
        }
  
        return {};
      };
    }
}