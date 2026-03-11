import { Badge, Box, Container, Link, Stack, Text } from "@chakra-ui/react"
import { useDetectedOS } from "@/utils/os-detection"

const MAC_ARM64_URL =
  "https://github.com/thebytearray/byte-invoice/releases/latest/download/Byte-Invoice-1.0.0-macos-arm64.dmg"
const MAC_X64_URL =
  "https://github.com/thebytearray/byte-invoice/releases/latest/download/Byte-Invoice-1.0.0-macos-x64.dmg"

export function HeroSection() {
  const { macArch } = useDetectedOS()
  const primaryMacUrl = macArch === "arm64" ? MAC_ARM64_URL : MAC_X64_URL
  const secondaryMacLabel =
    macArch === "arm64" ? "Download for Intel Mac" : "Download for Apple Silicon"
  const secondaryMacUrl = macArch === "arm64" ? MAC_X64_URL : MAC_ARM64_URL

  return (
    <Box
      py={{ base: "20", md: "32" }}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: "-40%",
        left: "50%",
        transform: "translateX(-50%)",
        w: "120%",
        h: "80%",
        borderRadius: "full",
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, var(--chakra-colors-teal-500) 0%, transparent 70%)",
        opacity: 0.08,
        pointerEvents: "none",
      }}
    >
      <Container maxW="4xl" position="relative">
        <Stack align="center" textAlign="center" gap="8">
          <Badge
            colorPalette="teal"
            size="sm"
            px="3"
            py="1"
            borderRadius="full"
            fontWeight="medium"
            textTransform="uppercase"
            letterSpacing="wider"
            bg="whiteAlpha.300"
            borderWidth="1px"
            borderColor="whiteAlpha.400"
            _dark={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.200" }}
            backdropFilter="blur(12px)"
          >
            Invoicing made simple
          </Badge>
          <Stack gap="4" align="center">
            <Text
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              letterSpacing="tight"
              lineHeight="1.1"
              fontFamily="heading"
            >
              Byte Invoice
            </Text>
            <Badge
              colorPalette="gray"
              size="lg"
              variant="subtle"
              bg="whiteAlpha.200"
              borderWidth="1px"
              borderColor="whiteAlpha.300"
              _dark={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.200" }}
              backdropFilter="blur(12px)"
            >
              v1.0.0
            </Badge>
          </Stack>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            maxW="2xl"
            lineHeight="1.6"
          >
            Keep invoices, clients, and billing in one focused workspace. Built
            for freelancers and small teams who value simplicity.
          </Text>
          <Stack gap="4" align="center" direction={{ base: "column", sm: "row" }}>
            <Link
              href={primaryMacUrl}
              download
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px="8"
              py="4"
              borderRadius="lg"
              fontWeight="semibold"
              fontSize="md"
              bg="colorPalette.solid"
              color="colorPalette.contrast"
              boxShadow="sm"
              _hover={{
                bg: "colorPalette.solidHover",
                transform: "translateY(-1px)",
                boxShadow: "md",
              }}
              transition="all 0.2s"
            >
              Download for Mac
            </Link>
            <Link
              href={secondaryMacUrl}
              fontSize="sm"
              color="fg.muted"
              _hover={{ color: "fg", textDecoration: "underline" }}
              download
            >
              {secondaryMacLabel}
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
