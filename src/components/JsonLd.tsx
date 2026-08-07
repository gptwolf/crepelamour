type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Renders a JSON-LD script tag for structured data.
 * Safe for server components — data is stringified as JSON only.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
