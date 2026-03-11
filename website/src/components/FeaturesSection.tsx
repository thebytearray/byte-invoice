import {
  Box,
  CardBody,
  CardRoot,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  FaFileInvoice,
  FaUsers,
  FaBox,
  FaFilePdf,
  FaEnvelope,
  FaChartLine,
} from "react-icons/fa"

const features = [
  {
    icon: FaFileInvoice,
    title: "Invoice pipeline",
    description:
      "Track billing status, revenue at risk, and every invoice that needs review.",
  },
  {
    icon: FaUsers,
    title: "Client management",
    description:
      "Keep client data accurate, searchable, and ready for invoicing.",
  },
  {
    icon: FaBox,
    title: "Product catalog",
    description:
      "Build a reusable catalog; invoice creation feels faster and less repetitive.",
  },
  {
    icon: FaFilePdf,
    title: "PDF export",
    description:
      "Generate and download professional PDF invoices.",
  },
  {
    icon: FaEnvelope,
    title: "Email delivery",
    description:
      "Send invoices and reminders via SMTP with customizable templates.",
  },
  {
    icon: FaChartLine,
    title: "Dashboard",
    description:
      "Track revenue, pending balances, and recent invoice activity.",
  },
]

export function FeaturesSection() {
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
            Features
          </Text>
          <Heading size="xl" fontWeight="semibold" letterSpacing="tight">
            Everything you need to get paid
          </Heading>
          <Text color="fg.muted" maxW="xl" fontSize="lg">
            A focused toolkit for managing invoices, clients, and billing, without
            the bloat.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: "4", md: "6" }}
        >
          {features.map((feature) => (
            <CardRoot
              key={feature.title}
              bg="bg"
              borderWidth="1px"
              borderColor="border"
              boxShadow="sm"
              _hover={{
                borderColor: "border.emphasized",
                boxShadow: "md",
              }}
              transition="all 0.2s"
            >
              <CardBody gap="4">
                <Box
                  w="10"
                  h="10"
                  borderRadius="lg"
                  bg="colorPalette.subtle"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon
                    as={feature.icon}
                    boxSize="5"
                    color="colorPalette.solid"
                  />
                </Box>
                <Box>
                  <Text fontWeight="semibold" fontSize="lg" mb="1">
                    {feature.title}
                  </Text>
                  <Text fontSize="sm" color="fg.muted" lineHeight="1.6">
                    {feature.description}
                  </Text>
                </Box>
              </CardBody>
            </CardRoot>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
