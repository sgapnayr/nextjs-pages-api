import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await getMusic(req, res);
    default:
      res.status(405).end();
      break;
  }
}

const musicLibrary = [
  {
    musicId: "1",
    songName: "Never Trust Again",
    songArtist: "Pags",
    songLength: "3:22",
  },
  {
    musicId: "2",
    songName: "Welcome to Westlake",
    songArtist: "Pags",
    songLength: "2:10",
  },
];

async function getMusic(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).send(musicLibrary);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
}
