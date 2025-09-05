import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <section>
      <div className="border-1 border-gray-400 rounded-sm p-10">
        <h1 className="text-center mb-10">Login Page</h1>
        <form>
          <div className="mb-5">
            <input placeholder="email" className="border p-2" />
          </div>
          <div className="mb-5">
            <input placeholder="password" className="border p-2" />
          </div>
          <div>
            <Button className="w-full mb-3">login</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
