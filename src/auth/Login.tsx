import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";
import backend from "../api/backend";
import useAxios from "../hooks/useAxios";

export default function Login() {
  const [message, setMessage] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const [response, error, loading, fetch] = useAxios();

  const onSubmit = (e: any) => {
    e.preventDefault();

    fetch({
      axiosInstance: backend,
      url: "user/login",
      method: "POST",
      requestConfig: [
        {
          email,
          password,
        },
      ],
    });
  };

  useEffect(() => {
    if (response) {
      console.log(response);
      setMessage("");
      login({
        id: response.userId,
        email: response.email,
        role: response.role,
      });

      navigate("/app");
    } else if (error) {
      setMessage("Veuillez remplir les infos correctes");
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, error]);

  return (
    <>
      <div className="bg-cyan-400 bg-gradient-to-bl from-blue-500 md:from-white md:bg-white h-screen md:grid md:grid-cols-2 space-y-[16%] md:pt-0 pt-[8%]">
        <div className="flex flex-col items-center justify-center text-center md:bg-cyan-400 md:bg-gradient-to-bl md:from-blue-500 text-white">
          {/* ... */}
        </div>

        <div className="md:relative flex flex-col items-center justify-center space-y-10">
          <div className="relative bottom-5 w-full flex justify-center md:px-0 px-4">
            <form
              className="bg-white py-3 px-4 space-y-4 md:px-0 rounded-lg md:drop-shadow-none drop-shadow-xl md:w-96 w-full"
              onSubmit={onSubmit}
            >
              <div className="font-bold text-2xl text-center">Se connecter</div>

              <div className="text-center text-red-500">
                {message === "" ? "" : message}
              </div>

              <div className="space-y-6 ">
                <Input
                  value={email}
                  label="Email"
                  type="text"
                  onChange={setEmail}
                  id="email"
                />
                <Input
                  value={password}
                  label="Mot de passe"
                  type="password"
                  onChange={setPassword}
                  id="password"
                />
                <Button
                  className="w-full mt-4 font-semibold"
                  onClick={() => {}}
                  type="submit"
                  label={
                    loading ? (
                      <>
                        <div role="status" className="w-fit mx-auto">
                          <svg
                            aria-hidden="true"
                            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      </>
                    ) : (
                      "Se connecter"
                    )
                  }
                  disabled={loading}
                />
              </div>
            </form>
          </div>

          <div className="space-x-2 mt-16 md:relative absolute bottom-2">
            <span className="text-gray-700">Pas de compte?</span>
            <Link to="/inscription" className="md:text-cyan-600 text-white">
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
