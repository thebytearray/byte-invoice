import { Box } from '@chakra-ui/react'

interface ResponsiveListProps {
  cards: React.ReactNode
  table: React.ReactNode
}

/**
 * Shows card layout on mobile (base/sm) and table layout on desktop (md+).
 * Use for invoice, client, product, and dashboard list views.
 */
export function ResponsiveList({ cards, table }: ResponsiveListProps) {
  return (
    <>
      <Box display={{ base: 'block', md: 'none' }}>{cards}</Box>
      <Box display={{ base: 'none', md: 'block' }}>{table}</Box>
    </>
  )
}
