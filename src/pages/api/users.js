import { initMongoose } from "@/lib/mongoose";
import User from "@/models/User";
// import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  await initMongoose();

  // const session = await unstable_getServerSession(req, res, authOptions);

  if (req.method === "GET") {
    const id = req.query.id;
    const user = await User.findById(id);
    res.json({ user });
  }

  if (req.method === "PUT") {
    const { username, userInfo } = req.body;
    console.log("🚀 ~ file: users.js:22 ~ handle ~ username:", username);
    console.log("🚀 ~ file: users.js:21 ~ handle ~ id:", userInfo._id);
    await User.findByIdAndUpdate(userInfo._id, { username: username });

    res.json("ok");
  }
}
