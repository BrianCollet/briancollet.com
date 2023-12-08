import { useEffect, useState } from 'react';
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  VStack,
  SimpleGrid,
  HStack,
  Heading
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from 'components/shared/animations/motion';
import Header from 'components/shared/header';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';
import { CardTransition } from 'components/shared/animations/page-transitions'
import { featuredArticles, featuredProjects } from 'data/data';

const ANIMATION_DURATION = 0.5;
const ORANGE = '#ff9400';
const emojis = ['👋', '👍', '🖐'];

const Home = () => {
  const linkColor = useLinkColor();
  const [showEmogi, setShowEmoji] = useState(false);
  const [emojiCounter, setEmojiCounter] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0);
    }, 500);
    return () => clearInterval(interval);
  }, [emojiCounter]);

  return (
    <Flex direction="column" align="center">
      <Flex direction={['column', 'column', 'row']}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full">
            <Avatar
              size={'2xl'}
              showBorder={false}
              src={'https://avatars2.githubusercontent.com/u/50160870?v=4'}
            />
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Box position="relative">
            <Box position="absolute" width="full" fontSize="2xl" textAlign="center">
              {emojis.map((item, index) => {
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    right="80%"
                    animate={showEmogi && emojiCounter === index ? 'show' : 'hide'}
                    variants={{
                      hide: { translateY: -80, opacity: 0 },
                      show: {
                        translateY: [0, -40, -60],
                        opacity: [0, 1, 0]
                      }
                    }}
                    initial="hide"
                  >
                    {item}
                  </MotionBox>
                );
              })}
            </Box>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={ORANGE}
                emoji="👋"
                mt={0}
                cursor="pointer"
                width="max-content"
                onClick={() => {
                  setEmojiCounter((prevCounter) => prevCounter + 1);
                  setShowEmoji(true);
                }}
              >
                Hey!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            I'm{' '}
            <Box as="strong" fontWeight="600">
              Brian,
            </Box>{' '}
            a{' '}
            <Box as="span" whiteSpace="nowrap">
              Cloud Engineer and DevOps
            </Box>{' '}
            <Box as="span" whiteSpace="nowrap">
              enthusiast&nbsp;
            </Box>
            from{' '}
            <Box as="span" whiteSpace="nowrap">
              Southern California 🏖️
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            This is my mojo dojo casa house, where I document the things I&apos;m working on and share
            what I&apos;ve learned. 😊
          </Box>
        </MotionFlex>
      </Flex>

      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
        zIndex={1}
      >
        <Box mt={10}>
          <ProjectsBox linkColor={linkColor} />
          <ArticlesBox linkColor={linkColor} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

const ProjectsBox = ({ linkColor }) => {
  return (
    <Stack
      mb={10}
      mx={[0, 0, 10]}
      padding={4}
      align="start"
      borderLeft="4px solid"
      borderColor={linkColor}
      color={'whatsapp'}
      _hover={{ shadow: 'lg' }}
      backgroundColor={useColorModeValue('gray.100', '#1e2533')}
      rounded="sm"
      fontSize="md"
    >
      <Text
        textAlign="center"
        color="#53c8c4"
        fontWeight="bold"
        fontSize={['md', 'lg']}
        variant="gradient"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fromcolor="blue.400"
        tocolor="red.500"
      >
        Featured Projects:
      </Text>
      <UnorderedList textAlign="left" paddingLeft={5} m={0}>
        {featuredProjects.map((content, index) => (
          <ListItem key={index}>
            <NextLink href={content.link} passHref>
              <Link color={linkColor} isExternal>
                {content.text}
                {content.showNewTag && (
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                )}
              </Link>
            </NextLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
};

const ArticlesBox = ({ linkColor }) => {
  return (
    <VStack align="start" spacing={8} width="100%">
      <Header underlineColor={ORANGE} mt={0} mb={0}>
        Featured Articles
      </Header>
      <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
        {featuredArticles.map(({ link, text }, i) => (
          <MotionBox whileHover={{ y: -5 }} key={i}>
            <CardTransition>
              <VStack
                spacing={1}
                p={4}
                _hover={{ shadow: 'md', textDecoration: 'none' }}
                borderWidth="1px"
                position="relative"
                rounded="md"
                bg={useColorModeValue('white', 'gray.800')}
                align="left"
              >
                <HStack justifyContent="space-between" isInline>
                  <Heading fontSize="lg" textAlign="left" mt={0}>
                    <Link href={link} color={linkColor} isExternal>
                      {text}
                    </Link>
                  </Heading>
                </HStack>
              </VStack>
            </CardTransition>
          </MotionBox>
        ))}
      </SimpleGrid>
      <HStack justifyContent="center" width="100%">
        <Link href="https://dev.to/briancollet" isExternal>
          <HStack spacing={2} as={Link} color={linkColor}>
            <Text fontSize="sm">More Articles</Text>
            <Box height="1.2rem" width="1.2rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </svg>
            </Box>
          </HStack>
        </Link>
      </HStack>
    </VStack>
  )
}

export default Home;
