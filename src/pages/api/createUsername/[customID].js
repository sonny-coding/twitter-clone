import { initMongoose } from "@/lib/mongoose";
import User from "@/models/User";

export default async function handle(req, res) {
  await initMongoose();
  if (req.method === "PUT") {
    const { username, userInfo } = req.body;
    await User.findByIdAndUpdate(userInfo._id, { username });
    res.json("ok");
  }
}
