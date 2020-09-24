import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Icon,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/core";

function Header() {
  return (
    <Flex
      as="header"
      alignItems="center"
      p="4"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box w="35px" h="35px" bg="black" mr="4" borderRadius="50%"></Box>
      <Box fontSize="2xl" fontWeight="bold">
        Triângulo
      </Box>
    </Flex>
  );
}

function IntroSection() {
  return (
    <Flex
      as="section"
      width="100%"
      justifyContent="center"
      px="4"
      py="24"
      bg="gray.900"
      color="white"
    >
      <Box maxWidth="xl">
        <Heading as="h1" fontSize="4xl" textAlign="center" mb="8">
          Alcance o próximo nível em desenvolvimento front-end
        </Heading>

        <Text mb={4}>
          Mais conhecimento, mais prática, mais oportunidades. Aprenda a
          construir webapps avançados, com cursos objetivos.
        </Text>
        <Text mb={4}>
          Domine os fundamentos que estão por trás das ferramentas que
          transformam a web na maior plataforma de distribuição de sofware.
        </Text>
        <Text>
          O <strong>Triângulo</strong> é uma escola de programação com o foco em
          desenvolvimento frontend. Nosso professor, Hugo Bessa, tem mais de 7
          anos de experiência em projetos de diversos tipos e tamanhos.
        </Text>
      </Box>
    </Flex>
  );
}

function BlogRoll() {
  return (
    <Flex as="section" width="100%" justifyContent="center" py="24" px="4">
      <Box maxWidth="xl">
        <Heading as="h2" fontSize="4xl" textAlign="center" mb="8">
          Blog
        </Heading>

        <Box as="article">
          <Link>
            <Heading as="h3" fontSize="2xl">
              3 hábitos para escrever CSS escalável
            </Heading>
          </Link>
          <Text>
            O que você precisa saber para escrever CSS que escala junto com o
            seu projeto.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

function CSSStudyGuide() {
  return (
    <Flex as="section" py="4" px="4" width="100%" justifyContent="center">
      <Box
        width="100%"
        maxWidth="3xl"
        borderWidth="1px"
        borderColor="gray.100"
        borderRadius="lg"
        p="6"
        boxShadow="md"
      >
        <Stack isInline={true} spacing="2">
          <Badge variantColor="yellow">Novidade</Badge>
          <Badge variantColor="green">Grátis</Badge>
        </Stack>
        <Heading as="h2" fontSize="4xl" mt="1" mb="3">
          Guia de Estudos CSS
        </Heading>

        <Text>
          Um pouco perdido com tudo o que precisa estudar CSS? O Guia de Estudos
          CSS é um quadro no Trello com dezenas de recursos para te ajudar a
          estudar todos os principais fundamentos e ferramentas do CSS.
        </Text>

        <Box mt="4" columns="2" spacing="10">
          <Stack spacing="4">
            <Stack isInline={true} spacing="4" alignItems="flex-end">
              <FormControl>
                <FormLabel fontWeight="bold" htmlFor="css-guide-name">
                  Nome
                </FormLabel>
                <Input
                  id="css-guide-name"
                  name="name"
                  aria-describedby="css-guide-email-helper"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="bold" htmlFor="css-guide-email">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  id="css-guide-email"
                  aria-describedby="css-guide-email-helper"
                />
              </FormControl>
              <Box>
                <Button
                  flexGrow="0"
                  variantColor="green"
                  rightIcon="arrow-forward"
                >
                  Receber o Guia
                </Button>
              </Box>
            </Stack>
            <Stack isInline={true} spacing="4">
              <Text color="gray.500">
                Nós nunca mandaremos spam. Você pode se descadastrar a qualquer
                momento.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}

export default function Home() {
  return (
    <Box w="100%" maxW="1440px" mx="auto" bg="white">
      <Header />

      <IntroSection />
      <BlogRoll />
      <CSSStudyGuide />
    </Box>
  );
}
