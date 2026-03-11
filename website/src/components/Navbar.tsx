import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"
import { ColorModeButton } from "@/components/ui/color-mode"

const GITHUB_URL = "https://github.com/thebytearray/byte-invoice"

export function Navbar() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="50"
      px={{ base: "3", md: "4" }}
      pt="3"
      pb="2"
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={{ base: "3", md: "4" }}
        py="2"
        maxW="4xl"
        mx="auto"
        borderRadius="full"
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        bg="whiteAlpha.400"
        backdropFilter="blur(16px) saturate(180%)"
        boxShadow="0 4px 24px -1px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.05) inset"
        _dark={{
          borderColor: "whiteAlpha.100",
          bg: "whiteAlpha.50",
          boxShadow: "0 4px 24px -1px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06) inset",
        }}
      >
        <Text
          fontWeight="600"
          fontSize="sm"
          fontFamily="heading"
          letterSpacing="tight"
        >
          Byte Invoice
        </Text>
        <Flex align="center" gap="1">
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex"
            alignItems="center"
            gap="1.5"
            px="3"
            py="1.5"
            borderRadius="full"
            fontSize="xs"
            fontWeight="medium"
            borderWidth="1px"
            borderColor="whiteAlpha.300"
            bg="whiteAlpha.200"
            _dark={{ borderColor: "whiteAlpha.200", bg: "whiteAlpha.100" }}
            backdropFilter="blur(8px)"
            color="fg"
            _hover={{
              bg: "whiteAlpha.300",
              _dark: { bg: "whiteAlpha.150" },
              borderColor: "whiteAlpha.400",
            }}
            transition="all 0.2s"
          >
            <Icon as={FaGithub} boxSize="3.5" />
            <Text as="span" display={{ base: "none", sm: "inline" }}>
              GitHub
            </Text>
          </Link>
          <ColorModeButton size="xs" />
        </Flex>
      </Flex>
    </Box>
  )
}
