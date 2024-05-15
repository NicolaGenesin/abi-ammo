import { getRecoilColor, getAccuracyColor, getColor } from "@/pages";
import {
  AccordionPanel,
  Flex,
  Center,
  HStack,
  Spacer,
  Box,
  Text,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";

const headers: any = {
  Dmg: "Damage",
  Pen: "Penetration",
  "Pierce lvl": "Pierce Level",
  "Armor Dmg": "Armor Damage",
  "Vel (m/s)": "Velocity (m/s)",
  Accuracy: "Accuracy",
  "V.Recoil Control": "V.Recoil Control",
  "H.Recoil Control": "H.Recoil Control",
  "Wound %": "Wound Chance",
  "Extra Range": "Extra Range",
  "Stam Drain": "Stamina Drain",
};

const DesktopRow = ({
  ammos,
  caliber,
  maxCellHeight,
}: {
  ammos: any[];
  caliber: string;
  maxCellHeight: string;
}) => {
  return (
    <Box bg="vulcan.850">
      <AccordionButton p="0" _focus={{ boxShadow: "none" }}>
        <AccordionIcon ml="8px" />
        <Flex>
          <Text zIndex={100} pl="8px" fontWeight="bold" fontSize="xl">
            {caliber}
          </Text>
        </Flex>
      </AccordionButton>
      <AccordionPanel pt={1} pb={0} px={0} mt="-34px" style={{ zIndex: 10 }}>
        <>
          <Flex>
            <Box h={maxCellHeight} minW="215px" />
            {Object.keys(headers).map((headerLabel, index) => {
              const headerProperty: any = headers[headerLabel];
              const isSortable = [2, 3, 4, 5].includes(index);

              let flex = "1";

              if (index === 0) {
                flex = "1.5";
              }

              return (
                <Center
                  flex={flex}
                  bg="vulcan.800"
                  key={`header-${index}`}
                  fontWeight="semibold"
                  fontSize="10"
                  textAlign="center"
                >
                  <Text color={"tarkovYellow.100"}>
                    {headerLabel.toUpperCase()}
                  </Text>
                </Center>
              );
            })}
          </Flex>
          {ammos.map((ammo: any, index: number) => {
            return (
              <div key={ammo.Name}>
                <Flex
                  bg={index % 2 === 0 ? "vulcan.900" : "vulcan.850"}
                  fontWeight={"bold"}
                  _hover={{ bg: "vulcan.800" }}
                  color={"tarkovYellow.100"}
                  fontSize={12}
                >
                  <HStack minW="215px" py="2px" pr="8px">
                    <Center
                      // bg={ammoMatch ? "blue.600" : ""}
                      fontSize="xs"
                      fontWeight="semibold"
                      ml="8px"
                    >
                      {ammo.Name}
                    </Center>
                    <Spacer />
                  </HStack>
                  <Center flex="1.5" color="tarkovYellow.100">
                    {ammo.Damage}
                  </Center>
                  <Center flex="1" color="tarkovYellow.100">
                    {ammo.Penetration}
                  </Center>
                  <Center flex="1" color="tarkovYellow.100">
                    {ammo["Pierce Level"]}
                  </Center>
                  <Center flex="1" color="tarkovYellow.100">
                    {ammo["Armor Damage"]}
                  </Center>
                  <Center flex="1" color="tarkovYellow.100">
                    {ammo["Velocity (m/s)"]}
                  </Center>
                  <Center
                    flex="1"
                    bg={getColor(ammo["Accuracy"])}
                    color="black"
                  >
                    {ammo["Accuracy"]}
                  </Center>
                  <Center
                    flex="1"
                    bg={getColor(ammo["V.Recoil Control"])}
                    color="black"
                  >
                    {ammo["V.Recoil Control"]}
                  </Center>
                  <Center
                    flex="1"
                    bg={getColor(ammo["H.Recoil Control"])}
                    color="black"
                  >
                    {ammo["H.Recoil Control"]}
                  </Center>
                  <Center
                    flex="1"
                    bg={getColor(ammo["Wound Chance"])}
                    color="black"
                  >
                    {ammo["Wound Chance"]}
                  </Center>
                  <Center
                    flex="1"
                    bg={getColor(ammo["Extra Range"])}
                    color="black"
                  >
                    {ammo["Extra Range"]}
                  </Center>
                  <Center
                    flex="1"
                    bg={getColor(ammo["Stamina Drain"])}
                    color="black"
                  >
                    {ammo["Stamina Drain"]}
                  </Center>
                </Flex>
              </div>
            );
          })}
        </>
      </AccordionPanel>
    </Box>
  );
};

export default DesktopRow;