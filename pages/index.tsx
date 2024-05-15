"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Link } from "@chakra-ui/next-js";
import { ammoData } from "@/util/ammoData";
import {
  Flex,
  HStack,
  Checkbox,
  Center,
  Tooltip,
  Spacer,
  VStack,
  Text,
  Box,
  AccordionPanel,
  AccordionItem,
  Accordion,
} from "@chakra-ui/react";
import { useState } from "react";
import DesktopRow from "@/components/DesktopRow";

const inter = Inter({ subsets: ["latin"] });

export const getColor = (value: string | number) => {
  if (!value) {
    return "";
  }

  // return green color if value contains '+'
  if (value === "") {
    return "vulcan.900";
  }

  // if value contains the character '+', return green
  if (value?.toString().includes("+")) {
    return "#4cf057";
  } else if (value?.toString().includes("-")) {
    return "#cf0b04";
  }
  if (value?.toString().toLowerCase().includes("medium")) {
    return "orange";
  }
  if (value?.toString().toLowerCase().includes("low")) {
    return "#cf0b04";
  }
  if (value?.toString().toLowerCase().includes("high")) {
    return "#4cf057";
  }

  return "tarkovYellow.100";
};

export default function Home() {
  const tmp = ammoData;

  // group ammoData by Caliber
  const calibers = tmp.reduce((acc: any, ammo: any) => {
    if (!acc[ammo.Caliber]) {
      acc[ammo.Caliber] = [];
    }
    acc[ammo.Caliber].push(ammo);
    return acc;
  }, {});

  let maxCellHeight = "48px";

  // count keys in ammoByCaliber
  const keysFilteredByWeaponName = Object.keys(calibers);

  const [expandedItems, setExpandedIndexes] = useState([
    ...Array(keysFilteredByWeaponName.length).keys(),
  ]);

  return (
    <>
      <Head>
        <title>ABI Ammo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Box pb="48px" id="eft-ammo-contentcontainer">
          <Center mb="24px">
            <VStack>
              <Text
                textAlign="center"
                color="red.700"
                fontWeight="bold"
                fontSize={["xl", "4xl"]}
                mt="24px"
                as="h1"
              >
                Arena Breakout Infinite Ammo Charts
              </Text>
              <Text
                color="red.700"
                fontSize="lg"
                textAlign="center"
                fontWeight="bold"
              >
                v0.x (Updated on 2024/05/15)
              </Text>
            </VStack>
          </Center>
        </Box>
        <Center>
          <Accordion
            textAlign="center"
            defaultIndex={expandedItems}
            index={expandedItems}
            allowMultiple
            allowToggle
            reduceMotion={true}
            onChange={(expandedIndexes: number[]) => {
              setExpandedIndexes(expandedIndexes);
            }}
            w={["100%", "100%", "100%", "100%", "95%", "90%"]}
          >
            <VStack>
              {Object.keys(calibers).map((caliber, index) => {
                return (
                  <Box
                    key={`allAmmos-${index}`}
                    color="tarkovYellow.100"
                    mx="24px"
                    rounded="sm"
                    border="6px solid"
                    borderColor="vulcan.900"
                    w="100%"
                  >
                    <AccordionItem border="none" w="100%" key={caliber}>
                      <DesktopRow
                        ammos={calibers[caliber]}
                        caliber={caliber}
                        maxCellHeight={maxCellHeight}
                      />
                    </AccordionItem>
                  </Box>
                );
              })}
            </VStack>
          </Accordion>
        </Center>
      </main>
    </>
  );
}
