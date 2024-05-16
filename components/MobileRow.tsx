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
  Divider,
  VStack,
} from "@chakra-ui/react";

const MobileRow = ({ ammos, caliber }: { ammos: any[]; caliber: string }) => {
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
            <Box h={"32px"} />
          </Flex>
          {ammos.map((ammo: any, index: number) => {
            return (
              <div key={ammo.Name}>
                <Box
                  key={`allAmmos-${index}`}
                  bg="vulcan.800"
                  mb="12px"
                  p="8px"
                >
                  <HStack>
                    <Center fontSize="sm" fontWeight="semibold" ml="8px">
                      {ammo.Name}
                    </Center>
                    <Spacer />
                  </HStack>
                  <HStack
                    mt="8px"
                    fontSize="xs"
                    justify="space-around"
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" p="2px" w="100%">
                        Damage
                      </Center>
                      <Center bg="#4E4E4C" w="100%">
                        {ammo.Damage || "-"}
                      </Center>
                    </VStack>
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" p="2px" w="100%">
                        Penetration
                      </Center>
                      <Center bg="#4E4E4C" w="100%">
                        {ammo.Penetration || "-"}
                      </Center>
                    </VStack>
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" p="2px" w="100%">
                        Pierce Lvl
                      </Center>
                      <Center bg="#4E4E4C" w="100%">
                        {ammo["Pierce Level"] || "-"}
                      </Center>
                    </VStack>
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" p="2px" w="100%">
                        Armor Dmg
                      </Center>
                      <Center bg="#4E4E4C" w="100%">
                        {ammo["Armor Damage"] || "-"}
                      </Center>
                    </VStack>
                  </HStack>
                  <HStack
                    mt="8px"
                    fontSize="xs"
                    justify="space-around"
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" p="2px" w="100%">
                        Vel (m/s)
                      </Center>
                      <Center bg="#4E4E4C" w="100%">
                        {ammo["Velocity (m/s)"] || "-"}
                      </Center>
                    </VStack>
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" p="2px" w="100%">
                        Accuracy
                      </Center>
                      <Center
                        bg={getColorNumbers(ammo["Accuracy"], false)}
                        color="black"
                        w="100%"
                      >
                        {ammo["Accuracy"] || "-"}
                      </Center>
                    </VStack>
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" p="2px" w="100%">
                        V.Recoil Ctrl
                      </Center>
                      <Center
                        bg={getColorNumbers(ammo["V.Recoil Control"], false)}
                        color="black"
                        w="100%"
                      >
                        {ammo["V.Recoil Control"] || "-"}
                      </Center>
                    </VStack>
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" p="2px" w="100%">
                        H.Recoil Ctrl
                      </Center>
                      <Center
                        bg={getColorNumbers(ammo["H.Recoil Control"], false)}
                        color="black"
                        w="100%"
                      >
                        {ammo["H.Recoil Control"] || "-"}
                      </Center>
                    </VStack>
                  </HStack>
                  <Divider my="8px" borderColor="vulcan.900" />
                  <HStack fontSize="xs" justify="space-around">
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" w="100%" p="1px">
                        Wound %
                      </Center>
                      <Center
                        bg={getColor(ammo["Wound Chance"])}
                        color="black"
                        w="100%"
                      >
                        {ammo["Wound Chance"] || "-"}
                      </Center>
                    </VStack>
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" w="100%" p="1px">
                        Extra Range
                      </Center>
                      <Center
                        bg={getColor(ammo["Extra Range"])}
                        color="black"
                        w="100%"
                      >
                        {ammo["Extra Range"] || "-"}
                      </Center>
                    </VStack>
                    <VStack spacing="0" w="100%">
                      <Center bg="#232314" w="100%" p="1px">
                        Stam Drain
                      </Center>
                      <Center
                        bg={getColorNumbers(ammo["Stamina Drain"], false)}
                        color="black"
                        w="100%"
                      >
                        {ammo["Stamina Drain"] || "-"}
                      </Center>
                    </VStack>
                  </HStack>
                </Box>
              </div>
            );
          })}
        </>
      </AccordionPanel>
    </Box>
  );
};

export default MobileRow;
