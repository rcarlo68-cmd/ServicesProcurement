import {
  Section,
  Container,
  Heading,
  Text,
} from "@react-email/components";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <Section
      style={{
        backgroundColor: "#0F172A",
        padding: "40px 0",
      }}
    >
      <Container
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <Text
          style={{
            color: "#06B6D4",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 700,
            margin: "0",
          }}
        >
          SERVICES PROCUREMENT
        </Text>

        <Heading
          as="h1"
          style={{
            color: "#FFFFFF",
            fontSize: "34px",
            fontWeight: 700,
            lineHeight: "42px",
            marginTop: "18px",
            marginBottom: "12px",
          }}
        >
          {title}
        </Heading>

        {subtitle && (
          <Text
            style={{
              color: "#CBD5E1",
              fontSize: "16px",
              lineHeight: "28px",
              margin: 0,
            }}
          >
            {subtitle}
          </Text>
        )}
      </Container>
    </Section>
  );
}