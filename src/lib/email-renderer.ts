/**
 * Plain text email templates. Renders short, professional emails as minimal HTML
 * for compatibility with email clients (htmlBody).
 */

function wrapPlainText(body: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.6; color: #333; margin: 0; padding: 16px;">
<pre style="font-family: inherit; font-size: inherit; white-space: pre-wrap; margin: 0;">${escapeHtml(body)}</pre>
</body>
</html>`
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export interface InvoiceEmailProps {
  invoiceNumber: string
  invoiceDate: string
  clientName: string
  companyName: string
  total: string
  dueDate: string
  pdfNote?: string
  statusMessage: string
}

export interface ReminderEmailProps {
  invoiceNumber: string
  clientName: string
  companyName: string
  total: string
  dueDate: string
  daysSinceSent?: number
}

export interface OverdueEmailProps {
  invoiceNumber: string
  clientName: string
  companyName: string
  total: string
  dueDate: string
  daysOverdue?: number
}

export async function renderInvoiceEmail(props: InvoiceEmailProps): Promise<string> {
  const lines: string[] = [
    `Dear ${props.clientName},`,
    '',
    `Please find attached invoice #${props.invoiceNumber} for $${props.total}, due ${props.dueDate}.`,
    '',
    props.statusMessage,
  ]
  if (props.pdfNote) {
    lines.push('', `Note: ${props.pdfNote}`)
  }
  lines.push('', 'If you have any questions, please reach out.', '', `Best regards,`, props.companyName)
  return wrapPlainText(lines.join('\n'))
}

export async function renderReminderEmail(props: ReminderEmailProps): Promise<string> {
  const daysNote =
    props.daysSinceSent && props.daysSinceSent > 0
      ? ` (sent ${props.daysSinceSent} day${props.daysSinceSent !== 1 ? 's' : ''} ago)`
      : ''
  const lines: string[] = [
    `Dear ${props.clientName},`,
    '',
    `This is a friendly reminder that invoice #${props.invoiceNumber} for $${props.total} is awaiting payment${daysNote}. Due date: ${props.dueDate}.`,
    '',
    'Please process at your earliest convenience.',
    '',
    `Best regards,`,
    props.companyName,
  ]
  return wrapPlainText(lines.join('\n'))
}

export async function renderOverdueEmail(props: OverdueEmailProps): Promise<string> {
  const daysNote =
    props.daysOverdue && props.daysOverdue > 0
      ? ` (${props.daysOverdue} day${props.daysOverdue !== 1 ? 's' : ''} overdue)`
      : ''
  const lines: string[] = [
    `Dear ${props.clientName},`,
    '',
    `Invoice #${props.invoiceNumber} for $${props.total} is now overdue${daysNote}. Original due date: ${props.dueDate}.`,
    '',
    'Please contact us to resolve this matter.',
    '',
    `Best regards,`,
    props.companyName,
  ]
  return wrapPlainText(lines.join('\n'))
}

export interface RenderAllTemplatesProps {
  companyName: string
  clientName: string
  invoiceNumber: string
  invoiceDate: string
  dueDate: string
  total: string
  pdfNote?: string
  statusMessage: string
  daysSinceSent: number
  daysOverdue: number
}

export async function renderAllEmailTemplates(
  props: RenderAllTemplatesProps
): Promise<{ invoiceHtml: string; reminderHtml: string; overdueHtml: string }> {
  const [invoiceHtml, reminderHtml, overdueHtml] = await Promise.all([
    renderInvoiceEmail({
      invoiceNumber: props.invoiceNumber,
      invoiceDate: props.invoiceDate,
      clientName: props.clientName,
      companyName: props.companyName,
      total: props.total,
      dueDate: props.dueDate,
      pdfNote: props.pdfNote,
      statusMessage: props.statusMessage,
    }),
    renderReminderEmail({
      invoiceNumber: props.invoiceNumber,
      clientName: props.clientName,
      companyName: props.companyName,
      total: props.total,
      dueDate: props.dueDate,
      daysSinceSent: props.daysSinceSent,
    }),
    renderOverdueEmail({
      invoiceNumber: props.invoiceNumber,
      clientName: props.clientName,
      companyName: props.companyName,
      total: props.total,
      dueDate: props.dueDate,
      daysOverdue: props.daysOverdue,
    }),
  ])
  return { invoiceHtml, reminderHtml, overdueHtml }
}
