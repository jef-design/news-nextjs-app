import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
    return (
       <div className="w-screen y-screen flex justify-center items-center z-50 bg-white fixed top-0 left-0 bottom-0">
            <div className="flex justify-center items-center mt-11 flex-col rounded-lg max-w-[350px] mx-auto p-5">
           
           <Image
               src="https://olhardigital.com.br/wp-content/uploads/2020/10/20201001121812.jpg"
               alt="Google News"
               height={350}
               width={500}
               loading="lazy"
              
           />
           <h2 onClick={signIn} className="cursor-pointer p-3 mb-16 bg-blue-700 w-full text-center text-white rounded-lg hover:bg-blue-600">
               Sign up
           </h2>
       </div>
       </div>
    );
}

export default Login;
