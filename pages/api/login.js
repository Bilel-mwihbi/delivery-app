import cookie from "cookie";

export default async function handler(req, res) {

      try {
          if (req.method === "POST") {
            const { username, password } = req.body;

            if (
              username === process.env.ADMIN_USERNAME &&
              password === process.env.ADMIN_PASSWORD
            ) {
              res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", process.env.TOKEN, {
                  maxAge: 60 * 60,
                  path: "/",
                })
              );
              res.status(200).json("Succesfull");
            }
          }
      }catch(err){
        console.log(err)
        res.status(400).json(err);
        
      }

    
  

}
