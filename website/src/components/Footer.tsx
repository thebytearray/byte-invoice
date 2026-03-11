import { Box, Container, Flex, Link, Text } from "@chakra-ui/react"

export function Footer() {
  return (
    <Box
      as="footer"
      py="10"
      borderTopWidth="1px"
      borderColor="whiteAlpha.200"
      bg="whiteAlpha.300"
      _dark={{ borderColor: "whiteAlpha.100", bg: "whiteAlpha.50" }}
      backdropFilter="blur(16px) saturate(180%)"
    >
      <Container maxW="6xl">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap="4"
        >
          <Text fontSize="sm" color="fg.muted">
            © 2026 Byte Invoice
          </Text>
          <Flex align="center" gap="6">
            <Link
              href="https://github.com/thebytearray/byte-invoice"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="sm"
              color="fg.muted"
              _hover={{ color: "fg", textDecoration: "underline" }}
            >
              GitHub
            </Link>
            <Link
              href="https://github.com/thebytearray/byte-invoice/releases"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="sm"
              color="fg.muted"
              _hover={{ color: "fg", textDecoration: "underline" }}
            >
              Releases
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
