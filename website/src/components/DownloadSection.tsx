import {
  Box,
  CardBody,
  CardRoot,
  Container,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FaApple, FaWindows, FaAndroid } from "react-icons/fa"
import { useDetectedOS } from "@/utils/os-detection"

const MAC_ARM64_URL =
  "https://github.com/thebytearray/byte-invoice/releases/latest/download/Byte-Invoice-1.0.0-macos-arm64.dmg"
const MAC_X64_URL =
  "https://github.com/thebytearray/byte-invoice/releases/latest/download/Byte-Invoice-1.0.0-macos-x64.dmg"
const WINDOWS_URL =
  "https://github.com/thebytearray/byte-invoice/releases/latest/download/Byte.Invoice_0.1.0_x64-setup.exe"
const ANDROID_URL =
  "https://github.com/thebytearray/byte-invoice/releases/latest/download/Byte-Invoice-1.0.0-android-universal.apk"

export function DownloadSection() {
  const { os, macArch } = useDetectedOS()
  const primaryMacUrl = macArch === "arm64" ? MAC_ARM64_URL : MAC_X64_URL
  const secondaryMacLabel =
    macArch === "arm64" ? "Intel" : "Apple Silicon"
  const secondaryMacUrl = macArch === "arm64" ? MAC_X64_URL : MAC_ARM64_URL

  const platforms = [
    {
      id: "mac" as const,
      icon: FaApple,
      name: "Mac",
      primaryLabel: "Download for Mac",
      primaryUrl: primaryMacUrl,
      secondaryLabel: secondaryMacLabel,
      secondaryUrl: secondaryMacUrl,
    },
    {
      id: "windows" as const,
      icon: FaWindows,
      name: "Windows",
      primaryLabel: "Download for Windows",
      primaryUrl: WINDOWS_URL,
      secondaryLabel: null,
      secondaryUrl: null,
    },
    {
      id: "android" as const,
      icon: FaAndroid,
      name: "Android",
      primaryLabel: "Get Android APK",
      primaryUrl: ANDROID_URL,
      secondaryLabel: null,
      secondaryUrl: null,
    },
  ]

  return (
    <Box py={{ base: "20", md: "28" }}>
      <Container maxW="6xl">
        <Stack align="center" textAlign="center" mb={{ base: "12", md: "16" }} gap="3">
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="colorPalette.solid"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Download
          </Text>
          <Heading size="xl" fontWeight="semibold" letterSpacing="tight">
            Get started in seconds
          </Heading>
          <Text color="fg.muted" maxW="xl" fontSize="lg">
            Available for Mac, Windows, and Android. Choose your platform below.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: "4", md: "6" }}
        >
          {platforms.map((platform) => {
            const isHighlighted = os === platform.id
            return (
              <CardRoot
                key={platform.id}
                bg="bg"
                borderWidth="1px"
                borderColor={isHighlighted ? "colorPalette.solid" : "border"}
                boxShadow="sm"
                _hover={{
                  borderColor: isHighlighted ? "colorPalette.solid" : "border.emphasized",
                  boxShadow: "md",
                }}
                transition="all 0.2s"
              >
                <CardBody gap="5">
                  <Box
                    w="12"
                    h="12"
                    borderRadius="lg"
                    bg={isHighlighted ? "colorPalette.subtle" : "bg.muted"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon
                      as={platform.icon}
                      boxSize="6"
                      color={isHighlighted ? "colorPalette.solid" : "fg.muted"}
                    />
                  </Box>
                  <Text fontWeight="semibold" fontSize="lg">
                    {platform.name}
                  </Text>
                  <Link
                    href={platform.primaryUrl}
                    download
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="full"
                    px="4"
                    py="3"
                    borderRadius="lg"
                    fontWeight="semibold"
                    bg="colorPalette.solid"
                    color="colorPalette.contrast"
                    boxShadow="sm"
                    _hover={{
                      bg: "colorPalette.solidHover",
                      transform: "translateY(-1px)",
                      boxShadow: "md",
                    }}
                    transition="all 0.2s"
                    mb={platform.secondaryUrl ? "2" : "0"}
                  >
                    {platform.primaryLabel}
                  </Link>
                  {platform.secondaryUrl && (
                    <Link
                      href={platform.secondaryUrl}
                      fontSize="sm"
                      color="fg.muted"
                      _hover={{ color: "fg", textDecoration: "underline" }}
                      download
                    >
                      Download for {platform.secondaryLabel} Mac
                    </Link>
                  )}
                </CardBody>
              </CardRoot>
            )
          })}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
