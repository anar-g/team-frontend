type RegisterData = {
  register: {
    id: string;
    name: string;
    email: string;
  };
};
type RegisterVars = {
  name: string;
  email: string;
  password: string;
};

type LoginData = {
  login: {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  };
};
type LoginVars = {
  email: string;
  password: string;
};
