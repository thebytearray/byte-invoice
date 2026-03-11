import { Box, Stack } from "@chakra-ui/react"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { DownloadSection } from "@/components/DownloadSection"
import { Footer } from "@/components/Footer"

const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`

function App() {
  return (
    <Box minH="100vh" position="relative" overflow="hidden">
      {/* Gradient mesh background for glass depth */}
      <Box
        position="fixed"
        inset="0"
        zIndex="0"
        bg="bg"
      />
      <Box
        position="fixed"
        inset="0"
        zIndex="0"
        background="radial-gradient(ellipse 80% 80% at 50% 0%, var(--chakra-colors-teal-500) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 80% 80%, var(--chakra-colors-teal-600) 0%, transparent 40%), radial-gradient(ellipse 50% 50% at 20% 90%, var(--chakra-colors-teal-700) 0%, transparent 35%)"
        opacity={0.15}
      />
      <Box
        position="fixed"
        inset="0"
        pointerEvents="none"
        zIndex="1"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: noiseSvg,
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
      />
      <Stack gap="0" position="relative" zIndex="2">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <Footer />
      </Stack>
    </Box>
  )
}

export default App
