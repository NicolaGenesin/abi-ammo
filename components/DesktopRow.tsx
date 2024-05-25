import { getColorNumbers, getColor } from "@/util/colors";
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
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const headers: any = {
  Damage: "Damage",
  Penetration: "Penetration",
  "Pierce lvl": "Pierce Level",
  "Armor Dmg": "Armor Damage",
  "Vel (m/s)": "Velocity (m/s)",
  Accuracy: "Accuracy",
  "V.Recoil Control": "V.Recoil Control",
  "H.Recoil Control": "H.Recoil Control",
  "Wound Chance": "Wound Chance",
  "Extra Range": "Extra Range",
  "Stamina Drain": "Stamina Drain",
};

const DesktopRow = ({
  ammos,
  caliber,
  tableState,
  setTableState,
}: {
  ammos: any[];
  caliber: string;
  tableState: any;
  setTableState: (any: any) => any;
}) => {
  // sort ammos by tableState.sorting.columnBeingSorted
  if (tableState.sorting.columnBeingSorted) {
    const columnBeingSorted = tableState.sorting.columnBeingSorted;
    const direction = tableState.sorting.direction.highToLow ? -1 : 1;

    console.log(columnBeingSorted, direction);

    ammos.sort((a, b) => {
      return (a[columnBeingSorted] - b[columnBeingSorted]) * direction;
    });
  }

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
            <Box h={"48px"} minW="175px" />
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
                  {index < 5 && (
                    <Box ml="4px">
                      <TiArrowSortedUp
                        cursor={"pointer"}
                        onClick={() => {
                          setTableState({
                            ...tableState,
                            sorting: {
                              columnBeingSorted: headerProperty,
                              direction: {
                                highToLow: false,
                              },
                            },
                          });
                        }}
                      />
                      <TiArrowSortedDown
                        cursor={"pointer"}
                        onClick={() => {
                          setTableState({
                            ...tableState,
                            sorting: {
                              columnBeingSorted: headerProperty,
                              direction: {
                                highToLow: true,
                              },
                            },
                          });
                        }}
                      />
                    </Box>
                  )}
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
                  <HStack minW="175px" py="2px" pr="8px">
                    <Center
                      // bg={ammoMatch ? "blue.600" : ""}
                      fontSize="xs"
                      fontWeight="semibold"
                      ml="8px"
                    >
                      {ammo.Name.replace(caliber, "")}
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
                    bg={getColorNumbers(ammo["Accuracy"], false)}
                    color="black"
                  >
                    {ammo["Accuracy"]}
                  </Center>
                  <Center
                    flex="1"
                    bg={getColorNumbers(ammo["V.Recoil Control"], false)}
                    color="black"
                  >
                    {ammo["V.Recoil Control"]}
                  </Center>
                  <Center
                    flex="1"
                    bg={getColorNumbers(ammo["H.Recoil Control"], false)}
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
                    bg={getColorNumbers(ammo["Stamina Drain"], true)}
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
