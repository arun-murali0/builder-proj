import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <section>
      <div className="border-1 border-gray-400 rounded-sm p-10">
        <h1 className="text-center mb-10">Register</h1>
        <form>
          <div className="mb-5">
            <input type="text" placeholder="name" className="border p-2" />
          </div>
          <div className="mb-5">
            <input type="email" placeholder="email" className="border p-2" />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="password"
              className="border p-2"
            />
          </div>
          <div>
            <Button className="w-full mb-3">Register</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
