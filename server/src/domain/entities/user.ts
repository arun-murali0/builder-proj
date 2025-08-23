type userEntityProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
};

const userEntity: userEntityProps = {
  id: "",
  name: "",
  email: "",
  password: "",
  role: "user", // default role
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default userEntity;
