import NextLink from "next/link";
import BaseLayout from "@/components/BaseLayout";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/core";

function GuiaDeEstudosCSS() {
  return (
    <BaseLayout>
      <Box as="section" width="100%" px="4" py="24" mx="auto" maxWidth="2xl">
        <Heading as="h1" fontSize={["2xl", "4xl"]} textAlign="center" mb="8">
          Guia de Estudos CSS
        </Heading>

        <Text mb={4}>
          Estudar CSS pode ser uma tarefa bastante complicada. São muitos
          conceitos para aprender e muito conteúdo para consumir. O Guia de
          Estudos CSS é um quadro no Trello que te ajudará a organizar sua
          rotina de estudos e te dará o caminho das pedras para ir do básico ao
          avançado no seu próprio tempo.
        </Text>
        <Text mb={4}>
          Ainda estamos trabalhando neste Guia. Nos siga no Twitter (
          <NextLink href="https://twitter.com/triangulo_dev" passHref>
            <Link color="blue.500">@triangulo_dev</Link>
          </NextLink>
          ) para saber quando ele for lançado. Ou simplesmente volte daqui
          alguns dias.
        </Text>
      </Box>
    </BaseLayout>
  );
}

export default GuiaDeEstudosCSS;
