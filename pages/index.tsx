"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Link } from "@chakra-ui/next-js";
import { ammoData } from "@/util/ammoData";
import {
  Center,
  VStack,
  Text,
  Box,
  AccordionItem,
  Accordion,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import DesktopRow from "@/components/DesktopRow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const tmp = ammoData;
  const [searchQuery, setSearchQuery] = useState("");

  // Filter ammoData based on search query
  const filteredAmmoData = tmp.filter(
    (ammo) =>
      ammo.Caliber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ammo.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // group ammoData by Caliber
  const calibers = filteredAmmoData.reduce((acc: any, ammo: any) => {
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
        <title>ABI | Ammo and Armor Charts 📊</title>
        <link rel="icon" href="https://eft-ammo.b-cdn.net/favicon.ico" />

        <meta
          name="description"
          content={
            "Arena Breakout Infinite Ammo and Armor Charts created by Filod 🙌"
          }
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemProp="name"
          content={
            "abi-ammo.com 🎮 | The definitive Arena Breakout Infinite Ammo charts v0.x"
          }
        />
        <meta
          itemProp="description"
          content={
            "Arena Breakout Infinite Ammo and Armor Charts created by Filod 🙌"
          }
        />
        {/* <meta itemProp="image" content="http://eft-ammo.com/assets/og-02.jpg" /> */}

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://abi-ammo.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            "abi-ammo.com 🎮 | The definitive Arena Breakout Infinite Ammo charts v0.x"
          }
        />
        <meta
          property="og:description"
          content={
            "Arena Breakout Infinite Ammo and Armor Charts created by Filod 🙌"
          }
        />
        {/* <meta name="og:image" content="http://eft-ammo.com/assets/og-02.jpg" /> */}

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="abi-ammo.com" />
        <meta property="twitter:url" content="https://abi-ammo.com/" />
        <meta
          name="twitter:title"
          content={
            "abi-ammo.com 🎮 | The definitive Arena Breakout Infinite Ammo charts v0.x"
          }
        />
        <meta
          name="twitter:description"
          content={
            "Arena Breakout Infinite Ammo and Armor Charts created by Filod 🙌"
          }
        />
        <meta
          name="twitter:image"
          content="http://eft-ammo.com/assets/og-02.jpg"
        />
      </Head>
      <main className={`${inter.className}`}>
        <Box pt="48px">
          <Center pb="48px">
            <VStack>
              <Text
                textAlign="center"
                color="tarkovYellow.100"
                fontWeight="bold"
                fontSize={["xl", "4xl"]}
                mt="24px"
                as="h1"
              >
                Arena Breakout Infinite - Ammo and Armor Charts
              </Text>
              <Text
                color="red.600"
                fontSize="md"
                textAlign="center"
                fontWeight="bold"
              >
                v0.x (Updated on 2024/05/15) | created by{" "}
                <Link
                  href="https://www.eft-ammo.com"
                  isExternal
                  textDecoration={"underline"}
                  fontSize={14}
                >
                  EFT-AMMO
                </Link>
              </Text>
            </VStack>
          </Center>
        </Box>
        <Center>
          <VStack>
            <Input
              type="text"
              placeholder="Search by caliber or ammo name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              maxW={"780px"}
              borderRadius={"none"}
              bg={"vulcan.900"}
              color={"tarkovYellow.100"}
              fontWeight={"semibold"}
              borderColor={"vulcan.900"}
              _placeholder={{ color: "tarkovYellow.100", textAlign: "center" }}
              mb={4}
            />
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
              w={["100%"]}
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
          </VStack>
        </Center>
      </main>
    </>
  );
}
