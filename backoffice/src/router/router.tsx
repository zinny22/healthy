export const Path = {
  Home: "/",
  LogIn: "/logIn",
  BodyTypeList: "/bodyType",
  BodyTypeCreate: "/bodyType/create",
  BodyTypeDetail: "/bodyType/:id",
};

export const To = {
  Home: "/",
  LogIn: "/logIn",
  BodyTypeList: "/bodyType",
  BodyTypeCreate: "/bodyType/create",
  BodyTypeDetail: (id: number) => `/bodyType/${id}`,
};
