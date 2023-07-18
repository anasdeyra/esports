import { type NextRequest, NextResponse } from "next/server";
import sg from "@sendgrid/mail";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  sg.setApiKey(process.env.SENDGRID_API_KEY ?? "");
  const msg = {
    to: "anasamazon607@gmail.com",
    from: "anasdoura607@gmail.com",
    subject: "test",
    text: JSON.stringify(body),
  };

  const res = sg
    .send(msg)
    .then(() => {
      return NextResponse.json("ok");
    })
    .catch((er) => {
      console.log(er);

      return NextResponse.error();
    });

  return res;
};
