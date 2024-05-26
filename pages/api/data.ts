import { ammoData } from "@/util/ammoData";
import type { NextApiRequest, NextApiResponse } from "next";

type AmmoDataPoint = {
  caliber: string;
  name: string;
  damage: number;
  penetration: number;
  pierceLevel: number;
  armorDamage: number;
  velocity: number;
  accuracy: string;
  vRecoilControl: string;
  hRecoilControl: string;
  woundChance: string;
  extraRange: string;
  staminaDrain: string;
};

type ResponseData = {
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // convert ammoData to a list of AmmoDataPoint objects
  const ammunitions: AmmoDataPoint[] = ammoData.map((point: any) => {
    return {
      caliber: point.Caliber,
      name: point.Name,
      damage: point.Damage,
      penetration: point.Penetration,
      pierceLevel: point["Pierce Level"],
      armorDamage: point["Armor Damage"],
      velocity: point["Velocity (m/s)"],
      accuracy: point.Accuracy,
      vRecoilControl: point["V.Recoil Control"],
      hRecoilControl: point["H.Recoil Control"],
      woundChance: point["Wound Chance"],
      extraRange: point["Extra Range"],
      staminaDrain: point["Stamina Drain"],
    };
  });

  const calibers = ammunitions.reduce((acc: any, ammo: any) => {
    if (!acc[ammo.caliber]) {
      acc[ammo.caliber] = [];
    }
    acc[ammo.caliber].push(ammo);
    return acc;
  }, {});

  res.status(200).json({ data: calibers });
}
